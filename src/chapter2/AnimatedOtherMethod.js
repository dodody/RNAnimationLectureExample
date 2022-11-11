import React, { useRef } from "react";
import { View, Text, Animated, Button } from "react-native";

export default function AnimatedOtherMethod() {
  const value1 = new Animated.Value(100);
  const value2 = new Animated.Value(50);
  const translateXAnim = useRef(new Animated.Value(-100)).current;

  // 합칠 이유가 뭐야
  // 두가지 애니메이션 벨류를 합쳐서 새로운 애니메이션 벨류를 만든다.

  const onPress = () => {
    // 그냥 더하면 object 값으로 숫자로 인식을 못하지만,
    // toValue에 애니메이션 value를 넣을수 있어서, 다음 값을 추측할 수 있다.
    // 혹은 벡터값을 컨트롤할 때,
    Animated.timing(translateXAnim, {
      toValue: Animated.add(translateXAnim, value1),
      useNativeDriver: true,
    }).start();

    // 최종 값을 추측해서 다음 상태로 넘어갈 수 있다.
    console.log(
      Animated.add(translateXAnim, value1),
      Animated.subtract(value1, translateXAnim),
      Animated.multiply(value1, translateXAnim),
      Animated.divide(value1, translateXAnim)
    );

    // ! Animated.loop(
    //   Animated.timing(translateXAnim, {
    //     toValue: 100,
    //     useNativeDriver: true,
    //   }).start(() => {
    //     Animated.timing(translateXAnim, {
    //     toValue: 100,
    //     useNativeDriver: true,
    //   }).reset()
    //   })
    // , {iterations: number}).start();

    // ! reset
    // Animated.timing(translateXAnim, {
    //   toValue: 100,
    //   useNativeDriver: true,
    // }).start(() => {
    //   Animated.timing(translateXAnim, {
    //   toValue: 100,
    //   useNativeDriver: true,
    // }).reset()
    // })
  };

  return (
    <View>
      <Button title="테스트" onPress={onPress} />
      <Animated.Text
        style={{
          fontSize: 70,
          transform: [
            {
              translateX: translateXAnim,
            },
          ],
        }}
      >
        🍊
      </Animated.Text>
    </View>
  );
}
