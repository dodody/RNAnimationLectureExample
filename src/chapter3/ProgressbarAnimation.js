import React, { useRef, useEffect } from "react";
import {
  Animated,
  View,
  Text,
  SafeAreaView,
  Button,
  Easing,
} from "react-native";

export default function ProgressbarAnimation() {
  const interpolateAnim = useRef(new Animated.Value(0)).current;
  let runProgressbar = true;

  useEffect(() => {
    return () => interpolateAnim.removeAllListeners();
  }, []);

  const onRunPress = () => {
    let randomNumber = Math.floor(Math.random() * 30);
    // 100이 넘지 않게 하는 트리거도 설정해주고요.
    interpolateAnim.addListener(({ value }) => {
      if (value > 100) {
        interpolateAnim.stopAnimation();
        runProgressbar = false;
      }
    });

    if (runProgressbar) {
      interpolateAnim.extractOffset();
      // extractOffset은 offset과 value의 합을 value로 업데이트 해주는 기능인데요,
      // 현재는 value에 새로운 toValue를 합하는 역할을 하고 있습니다.

      // offset 값을 쓰지는 않지만,value 값을 계속 업데이트 하기 위해 이런식으로 사용할 수 도 있음을 보여드리고 있습니다.

      console.log(randomNumber);
      Animated.spring(interpolateAnim, {
        toValue: randomNumber,
        friction: 7,
        tension: 40,
        useNativeDriver: false,
      }).start();
    }
  };

  // ! stagger와 sequence를 이용할 수도 있다.
  const onAutoRunPress = () => {
    let randomNumber = Math.floor(Math.random() * 30);
    if (runProgressbar) {
      Animated.stagger(700, [
        Animated.timing(interpolateAnim, {
          toValue: randomNumber,
          easing: Easing.out(Easing.circle),
          useNativeDriver: false,
        }),
        Animated.timing(interpolateAnim, {
          toValue: randomNumber + 20,
          easing: Easing.out(Easing.circle),
          useNativeDriver: false,
        }),
        Animated.timing(interpolateAnim, {
          toValue: randomNumber + 32,
          easing: Easing.out(Easing.circle),
          useNativeDriver: false,
        }),
        Animated.timing(interpolateAnim, {
          toValue: 100,
          easing: Easing.out(Easing.circle),
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  const onResetPress = () => {
    interpolateAnim.stopAnimation();
    Animated.timing(interpolateAnim, {
      toValue: 0,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: 300, margin: 20 }}>
        <Button title="run" onPress={onRunPress} />
        <Button title="auto run" onPress={onAutoRunPress} />
        <Button title="reset" onPress={onResetPress} />
        <View
          style={{
            position: "relative",
            marginBottom: 40,
            justifyContent: "center",
          }}
        >
          <View
            style={{ backgroundColor: "#222", height: 10, borderRadius: 100 }}
          />
          <Animated.View
            style={{
              position: "absolute",
              backgroundColor: "blue",
              height: 16,
              borderRadius: 100,
              width: interpolateAnim.interpolate({
                inputRange: [0, 100],
                outputRange: ["0%", "100%"],
              }),
            }}
          />
          {/* <Text style={{ position: "absolute", bottom: -30 }}>0</Text>
          <Animated.Text
            style={{ position: "absolute", bottom: -30, left: "30%" }}
          >
          </Animated.Text>
          <Text style={{ position: "absolute", bottom: -30, right: 0 }}>
            100
          </Text> */}
        </View>
      </SafeAreaView>
    </>
  );
}
