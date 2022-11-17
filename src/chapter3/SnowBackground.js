import React, { useRef, useEffect } from "react";
import { View, Animated } from "react-native";
import Icon from "react-native-vector-icons/Fontisto";

export default function SnowBackground() {
  return (
    <View
      style={{
        backgroundColor: "#121733",
        flex: 1,
        flexDirection: "row",
      }}
    >
      {[...Array(50)].map((value, index) => {
        const interpolateAnim = useRef(new Animated.Value(0)).current;
        useEffect(() => {
          Animated.loop(
            Animated.timing(interpolateAnim, {
              toValue: 1,
              delay: index * 5,
              duration: 5000,
              useNativeDriver: false,
            })
          ).start();
        }, []);

        return (
          <Animated.View
            key={index}
            style={{
              position: "absolute",
              top: interpolateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["-10%", "110%"],
              }),
              left: `${Math.floor(Math.random() * 100)}%`,
            }}
          >
            <Icon name="snowflake-2" color="white" size={14} />
          </Animated.View>
        );
      })}
    </View>
  );
}
