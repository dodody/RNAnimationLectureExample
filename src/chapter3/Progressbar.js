import React, { useRef } from "react";
import { Animated, View, Text, SafeAreaView } from "react-native";

export default function Progressbar() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 300, margin: 20 }}>
      <View
        style={{
          position: "relative",
          marginBottom: 40,
          justifyContent: "center",
        }}
      >
        <View
          style={{ backgroundColor: "#222", height: 10, borderRadius: 100 }}
        />
        <View
          style={{
            position: "absolute",
            backgroundColor: "blue",
            height: 16,
            borderRadius: 100,
            width: "30%",
          }}
        />
        <Text style={{ position: "absolute", bottom: -30 }}>0</Text>
        <Text style={{ position: "absolute", bottom: -30, left: "30%" }}>
          30
        </Text>
        <Text style={{ position: "absolute", bottom: -30, right: 0 }}>100</Text>
      </View>
    </SafeAreaView>
  );
}
