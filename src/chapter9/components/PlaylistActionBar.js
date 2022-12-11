import { View, Text } from "react-native";
import React from "react";

export default function PlaylistActionBar() {
  return (
    <>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: "#ffffff50",
          bottom: 0,
          width: "100%",
        }}
      >
        <View
          style={{
            position: "absolute",
            borderWidth: 0.5,
            borderColor: "#ffffff",
            bottom: 0,
            width: "10%",
          }}
        />
      </View>
    </>
  );
}
