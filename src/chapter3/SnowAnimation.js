import React, { useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Animated, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

const arr = [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

export default function SnowAnimation({ delay, speed }) {
  const interpolateAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(interpolateAnim, {
        toValue: 1,
        delay,
        duration: 10000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        position: "absolute",
        marginTop: -100,
        top: interpolateAnim.interpolate({
          inputRange: [0, speed],
          outputRange: ["0%", "100%"],
        }),
        left: `${Math.floor(Math.random() * 100)}%`,
      }}
    >
      <Icon name="snowflake-2" color="white" size={14} />
    </Animated.View>
  );
}
