import React, { useRef, useEffect } from "react";
import { View, Text, SafeAreaView, Animated, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import SnowAnimation from "./SnowAnimation";

const arr = [0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
const length = arr.length - 1;

const test = ["50%", "100%"];

export default function SnowBackground() {
  const interpolateAnim = useRef(new Animated.Value(0)).current;
  const interpolateAnim2 = useRef(new Animated.Value(0)).current;
  const { height } = Dimensions.get("window");

  // useEffect(() => {
  //   // interpolateAnim.addListener(({ value }) => console.log(value));
  //   // interpolateAnim2.addListener(({ value }) => console.log(value));

  //   Animated.loop(
  //     Animated.timing(interpolateAnim, {
  //       toValue: 1,
  //       duration: 5000,
  //       useNativeDriver: false,
  //     })
  //   ).start();
  // }, []);

  return (
    <View
      style={{
        backgroundColor: "#121733",
        flex: 1,
        flexDirection: "row",
      }}
    >
      {/* <>
        {[...Array(50)].map((value, index) => (
          <Animated.View
            style={{
              position: "absolute",
              marginTop: Math.floor(Math.random() * 100) + index * 30 - height,
              top: interpolateAnim.interpolate({
                inputRange: [0, arr[Math.floor(Math.random() * length)]],
                outputRange: ["0%", "100%"],
              }),
              left: `${Math.floor(Math.random() * 100)}%`,
            }}
          >
            <Icon name="snowflake" color="red" size={20} />
          </Animated.View>
        ))}
      </> */}
      <>
        {[...Array(100)].map((value, index) => (
          <SnowAnimation
            delay={index * 300}
            speed={arr[Math.floor(Math.random() * length)]}
          />
        ))}
      </>
      {/* <>
        {[...Array(50)].map((value, index) => (
          <Animated.View
            style={{
              position: "absolute",
              marginTop: Math.floor(Math.random() * 100) + index * 10 - height,
              top: interpolateAnim2.interpolate({
                inputRange: [0, arr[Math.floor(Math.random() * length)]],
                outputRange: ["0%", "200%"],
              }),
              left: `${Math.floor(Math.random() * 100)}%`,
            }}
          >
            <Icon name="snowflake" color="white" size={20} />
          </Animated.View>
        ))}
      </> */}
    </View>
  );
}
