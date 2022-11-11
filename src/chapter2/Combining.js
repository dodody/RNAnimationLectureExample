import React, { useRef } from "react";
import { View, Text, Animated, Button } from "react-native";

export default function AnimatedCombining() {
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const translateYAnim = useRef(new Animated.Value(-100)).current;

  const onButtonPress = () => {
    opacityAnim.addListener(({ value }) => console.log("opacityAnim", value));

    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 0,
        useNativeDriver: true,
        duration: 1000,
      }),
      Animated.timing(translateYAnim, {
        toValue: 100,
        useNativeDriver: true,
        duration: 1000,
      }),
    ]).start();

    setTimeout(() => {
      opacityAnim.stopAnimation();
    }, 500);

    translateYAnim.addListener(({ value }) =>
      console.log("translateYAnim", value)
    );
  };

  return (
    <View>
      <Button title="애니메이션 작동" onPress={onButtonPress} />
      <Animated.Text style={{ fontSize: 80, opacity: opacityAnim }}>
        🍊
      </Animated.Text>
      <Animated.Text
        style={{
          fontSize: 80,
          transform: [{ translateY: translateYAnim }],
        }}
      >
        🌳
      </Animated.Text>
    </View>
  );
}
