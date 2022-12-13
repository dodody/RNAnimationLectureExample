import React, { useState } from "react";
import { View, Text, Dimensions, Animated } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PlayListFullTop from "./PlayListFullTop";
import PlayListFullController from "./PlayListFullController";
import PlayListFullBottom from "./PlayListFullBottom";

const { width, height } = Dimensions.get("window");

export default function PlayListFull({ heightAnim, handleStopAnimation }) {
  return (
    // ! full
    <>
      {/* top */}
      <View style={{ position: "absolute" }}>
        <Animated.View
          style={{
            opacity: heightAnim.interpolate({
              inputRange: [0, height / 2, height],
              outputRange: [0, 0, 1],
            }),
            width: width,
            height: heightAnim.interpolate({
              inputRange: [-100, 60, height],
              outputRange: [-100, 0, height],
            }),
          }}
        >
          <PlayListFullTop handleStopAnimation={handleStopAnimation} />
          <PlayListFullController handleStopAnimation={handleStopAnimation} />
        </Animated.View>
      </View>
      {/* bottom  */}
      <PlayListFullBottom heightAnim={heightAnim} />
    </>
  );
}
