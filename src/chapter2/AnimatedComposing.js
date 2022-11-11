import React, { useRef } from "react";
import { View, Text, Animated, Button } from "react-native";

// sequence, parallel, delay, stagger 결합함수
// y: -200 > 0, x: 0> 100 spring animation
export default function AnimatedComposing() {
  const moveYAnim = useRef(new Animated.Value(-200)).current;
  const moveXAnim = useRef(new Animated.Value(0)).current;
  const onButtonPress = () => {
    //
    //
    //

    // Animated.timing(moveYAnim, {
    //   toValue: 0,
    //   useNativeDriver: true,
    // }).start();

    // Animated.timing(moveXAnim, {
    //   toValue: 100,
    //   useNativeDriver: true,
    // }).start();

    // 동기형식으로 작동하게 하는 함수
    // Animated.sequence([
    //   Animated.timing(moveYAnim, {
    //     toValue: 0,
    //     useNativeDriver: true,
    //   }),
    //   Animated.timing(moveXAnim, {
    //     toValue: 100,
    //     useNativeDriver: true,
    //   }),
    // ]).start();
    //
    //
    // 그룹으로 묶을 수 있는 함수
    // Animated.parallel([
    //   Animated.timing(moveYAnim, {
    //     toValue: 0, duration: 500,
    //     useNativeDriver: true,
    //   }),
    //   Animated.timing(moveXAnim, {
    //     toValue: 100, duration: 1000,
    //     useNativeDriver: true,
    //   }),
    // ]).start();

    // setTimeout(() => {
    //   moveYAnim.stopAnimation();
    // }, 500);

    //
    //
    // Animated.delay(100)
    //
    //

    // 전체적으로 delay를 주기 쉬운 애니메이션
    Animated.stagger(500, [
      Animated.timing(moveYAnim, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.timing(moveXAnim, {
        toValue: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View>
      <Button title="움직여라!" onPress={onButtonPress} />
      <Animated.Text
        style={{
          fontSize: 70,
          transform: [
            {
              translateY: moveYAnim,
            },
            {
              translateX: moveXAnim,
            },
          ],
        }}
      >
        🍊
      </Animated.Text>
    </View>
  );
}
