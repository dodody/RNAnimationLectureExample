import React, { useState, useRef } from "react";
import { View, Text, Dimensions, Animated } from "react-native";
import { faker } from "@faker-js/faker";
import Icon from "react-native-vector-icons/Entypo";

export default function PlayList() {
  const pageAnim = useRef(new Animated.Value(0)).current;
  const [play, setPlay] = useState(false);

  return (
    <>
      {/* 플레이 정보 영역 */}
      <View
        style={{
          height: 60,
          backgroundColor: "#222",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 10,
        }}
      >
        <View style={{ flexDirection: "row", paddingVertical: 10 }}>
          <Text>이미지</Text>
          <Text>이미지</Text>
          <Text>이미지</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text>이미지</Text>
          <Text>이미지</Text>
        </View>
      </View>
      {/* 플레이 영역 */}
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
