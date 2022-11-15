import React, { useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function SnowBackground() {
  const interpolateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(interpolateAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#121733",
        flex: 1,
        flexDirection: "row",
      }}
    >
      {[...Array(10)].map((value, index) => (
        <Animated.View
          style={{
            position: "absolute",
            marginTop: Math.floor(Math.random() * 100),
            top: interpolateAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"],
            }),
            left: `${Math.floor(Math.random() * 100)}%`,
          }}
        >
          <Icon name="snowflake" color="white" size={20} />
        </Animated.View>
      ))}
    </View>
  );
}
