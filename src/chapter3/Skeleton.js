import React, { useRef, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Animated,
  Button,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

// yarn add react-native-linear-gradient
// cd ios pod install ,하고 run ios 도 해야함
export default function skeleton() {
  const bgAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(bgAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        margin: 20,
        justifyContent: "center",
      }}
    >
      {[...Array(8)].map((value, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            position: "relative",
            overflow: "hidden",
            marginBottom: 16,
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              backgroundColor: "#dfdfdf",
              borderRadius: 4,
            }}
          />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <View
              style={{
                width: "80%",
                height: 12,
                backgroundColor: "#dfdfdf",
                borderRadius: 4,
              }}
            />
            <View
              style={{
                marginTop: 5,
                width: "100%",
                height: 12,
                backgroundColor: "#dfdfdf",
                borderRadius: 4,
              }}
            />
            <View
              style={{
                marginTop: 5,
                width: 50,
                height: 8,
                backgroundColor: "#dfdfdf",
                borderRadius: 4,
              }}
            />
          </View>
          {/* 스켈레톤?  */}
          {/*  */}
          <Animated.View
            style={{
              // backgroundColor: "white",
              position: "absolute",
              transform: [{ rotate: "20deg" }],
              top: -30,
              left: bgAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ["-20%", "130%"],
              }),
              zIndex: 1,
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#ffffff00", "#ffffff90", "#ffffff00"]}
            >
              <View style={{ width: 100, height: 200 }}></View>
            </LinearGradient>
          </Animated.View>
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  empty: {
    // backgroundColor: "red",
  },
});
