import React, { useState } from "react";
import { View, Text, Animated, Dimensions } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const { width, height } = Dimensions.get("window");

export default function PlayListFullBottom({ heightAnim }) {
  const [focus, setFocus] = useState(0);
  const category = ["다음 트랙", "가사", "관련 항목"];
  return (
    <Animated.View
      style={{
        position: "absolute",
        bottom: getBottomSpace(),
        opacity: heightAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, 0, 1],
        }),
        backgroundColor: "#444",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      }}
    >
      <View
        style={{
          height: 60,
          width,
          marginBottom: getBottomSpace(),
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {category.map((value, index) => (
          <Text
            key={index}
            style={{
              color: "white",
              flex: 1,
              fontSize: 13,
              textAlign: "center",
              fontWeight: focus === index ? "bold" : "normal",
            }}
          >
            {value}
          </Text>
        ))}
      </View>
    </Animated.View>
  );
}
