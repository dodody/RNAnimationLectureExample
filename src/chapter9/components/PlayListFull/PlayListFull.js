import React, { useState } from "react";
import { View, Text, Dimensions, Animated } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import PlayListFullTop from "./PlayListFullTop";
import PlayListFullController from "./PlayListFullController";
import PlayListFullBottom from "./PlayListFullBottom";

const { width, height } = Dimensions.get("window");

export default function PlayListFull({
  heightAnim,
  handleStopAnimation,
  panResponder,
}) {
  return (
    // ! full
    <>
      {/* top */}
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: "absolute",
          width: width,
          height: heightAnim.interpolate({
            inputRange: [0, height],
            outputRange: [0, height],
          }),
          zIndex: 2100,
        }}
      >
        <Animated.View
          style={{
            opacity: heightAnim.interpolate({
              inputRange: [0, height / 2, height],
              outputRange: [0, 0, 1],
            }),
            width,
            height,
          }}
        >
          <PlayListFullTop handleStopAnimation={handleStopAnimation} />
          <PlayListFullController
            handleStopAnimation={handleStopAnimation}
            panResponder={panResponder}
          />
        </Animated.View>
      </Animated.View>
      {/* bottom  */}
      <PlayListFullBottom heightAnim={heightAnim} />
    </>
  );
}
