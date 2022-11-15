import React, { useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Animated, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const arr = [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
const length = arr.length - 1;

const test = ["50%", "100%"];

export default function SnowAnimation({ delay, speed = 1 }) {
  const interpolateAnim = useRef(new Animated.Value(0)).current;
  const { height } = Dimensions.get("window");

  useEffect(() => {
    Animated.loop(
      Animated.timing(interpolateAnim, {
        toValue: 1,
        delay,
        duration: 5000,
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
      <Icon name="snowflake" color="white" size={20} />
    </Animated.View>
  );
}
