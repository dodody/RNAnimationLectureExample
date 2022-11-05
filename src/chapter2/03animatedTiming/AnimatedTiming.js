import React, { useRef } from "react";
import { Animated, View, Text, Button } from "react-native";

export default function AnimatedTiming() {
  const translateXAnim = useRef(new Animated.Value(-100)).current;
  const onTimingPress = () => {
    Animated.timing(translateXAnim, {
      toValue: 100,
    }).start();
  };

  return (
    <View>
      <Button title="timing animation" onPress={onTimingPress} />
      <Animated.Text
        style={{ fontSize: 60, transform: [{ translateX: translateXAnim }] }}
      >
        🍊
      </Animated.Text>
    </View>
  );
}
