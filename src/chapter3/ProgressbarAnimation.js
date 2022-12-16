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
  let clickCount = 0;

  // 수동으로 20%씩 올려서 100%까지 올려주는 역할
  const onRunPress = () => {
    if (clickCount < 5) {
      clickCount = clickCount + 1;
      console.log(interpolateAnim);
      //
      interpolateAnim.extractOffset();
      // 이렇게 하면, 한번만 하고 움직이지 않습니다.
      Animated.spring(interpolateAnim, {
        toValue: 20,
        // toValue는 목적지 값이라고 볼 수 있는데
        // 지금 이미 20에 도달했기 때문에 더이상 움직이지 않습니다.

        // 콘솔로그로 애니메이션 벨류값을 확인해볼게요
        // console.log(interpolateAnim);
        // clickCount를 카운팅 하extractOffset고 있으면 이렇게 해도 됩니다.
        // toValue: clickCount * 20,
        friction: 7,
        tension: 40,
        useNativeDriver: false,
      }).start();
      // ----------------------------------------
      // 물론 다른 방법도 있습니다.
      // offset과 관련된 기능인 extractOffset를 이용하는 방법입니다.
      // extractOffset 기능 자체에 대해서 예시로 설명을 드리면,
      // ------
      // const animValue = Animated.Value(15);
      // animValue.setOffset(5);

      // animValue.extractOffset();
      // ------
      //value = 0;
      //offset = 20;
      // ----------------------------------------
      // 결론적으로는 value를 0로 만들어주는걸 이용하는 겁니다.
      // interpolateAnim.extractOffset();를 이용해서 하면
      // toValue 값 인지가 더 잘된다는 특징이 있을수도 있네요.
      // 정답은 없고 이런 방법도 있어서 설명드립니다.
      // ----------------------------------------
      // interpolateAnim.extractOffset();
      // Animated.spring(interpolateAnim, {
      //   toValue: 20,
      //   friction: 7,
      //   tension: 40,
      //   useNativeDriver: false,
      // }).start();
    }
  };

  // 자동으로 100%까지 바로 채워주는 역할. 중간중간 멈추는 액션 추가
  // stagger와 sequence를 이용할 수도 있다.
  // 우선 sequence 를 사용해서 해봅시다~
  const onAutoRunPress = () => {
    interpolateAnim.setValue(0);

    Animated.stagger(150 + 500, [
      Animated.timing(interpolateAnim, {
        toValue: 30,
        duration: 500,
        easing: Easing.in(Easing.bounce),
        useNativeDriver: false,
      }),
      Animated.timing(interpolateAnim, {
        toValue: 70,
        duration: 500,
        easing: Easing.in(Easing.bounce),
        useNativeDriver: false,
      }),
      Animated.timing(interpolateAnim, {
        toValue: 100,
        duration: 500,
        easing: Easing.in(Easing.bounce),
        useNativeDriver: false,
      }),
    ]).start();
  };

  const onResetPress = () => {
    clickCount = 0;
    interpolateAnim.flattenOffset();
    Animated.timing(interpolateAnim, {
      toValue: 0,
      easing: Easing.out(Easing.circle),
      useNativeDriver: false,
    }).start();
    // 이렇게 하면, auto run은 잘 작동하는데, run은 작동하지 않습니다.
    // 왜냐면 extractOffset를 이용해 value값을 이동시켜줬었기 때문인데요,
    // 이번에는 extractOffset와 반대 되는 flattenOffset를 이용해 주면 됩니다.
    // 이번에는 flattenOffset에 대한 설명과 예시를 들어보겠습니다.
    //----------------------------------
    // const animValue = Animated.Value(15);
    // animValue.setOffset(5);

    // animValue.flattenOffset();

    // value = 20;
    // offset = 0;
    //----------------------------------
    // 지금의 위치value를 애니메이value 값으로 넣어주게되는거죠
    // 정말 반대되는 기능이죠?

    //
    //
    //
    // ! android 잘 작동하는지 확인하기
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
        </View>
      </SafeAreaView>
    </>
  );
}
