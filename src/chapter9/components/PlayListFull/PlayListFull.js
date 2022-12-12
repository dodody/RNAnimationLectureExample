import React, { useState } from "react";
import { View, Text, Dimensions, Animated } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

const { width, height } = Dimensions.get("window");

export default function PlayListFull({ heightAnim }) {
  const [focus, setFocus] = useState(0);
  const category = ["다음 트랙", "가사", "관련 항목"];

  return (
    // ! full
    <>
      <View style={{ position: "absolute" }}>
        <Animated.View
          style={{
            opacity: heightAnim.interpolate({
              inputRange: [0, height],
              outputRange: [0, 1],
            }),
            height: heightAnim.interpolate({
              inputRange: [0, height / 2, height],
              outputRange: [0, 0, 100],
            }),
            width: width,
            height: height,
            borderWidth: 1,
          }}
        >
          <Text>PlayListFull</Text>
          <Text>PlayListFull</Text>
        </Animated.View>
      </View>
      {/* bottom  */}
      <Animated.View
        style={{
          opacity: heightAnim.interpolate({
            inputRange: [0, height],
            outputRange: [0, 1],
          }),
          // height: heightAnim.interpolate({
          //   inputRange: [0, height],
          //   outputRange: [0, 100 + 50], // ! 100은 어디서 났어
          // }),
          backgroundColor: "#444",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <View
          style={{
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: getBottomSpace(),
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
    </>
  );
}
