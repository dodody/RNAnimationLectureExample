import React from "react";
import { Dimensions, Text, Animated } from "react-native";
import { faker } from "@faker-js/faker";

const { width, height } = Dimensions.get("window");
export default function PlayListMiniTitle({ heightAnim }) {
  return (
    <Animated.View
      style={{
        justifyContent: "center",
        marginLeft: 10,
        flex: heightAnim.interpolate({
          inputRange: [0, height / 2],
          outputRange: [1, 0],
        }),
        opacity: heightAnim.interpolate({
          inputRange: [0, height / 2],
          outputRange: [1, 0],
        }),
      }}
    >
      <Text
        style={{
          color: "white",
          marginBottom: 1,
          fontSize: 12,
        }}
        numberOfLines={1}
      >
        {faker.music.genre()}
      </Text>
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 12,
        }}
        numberOfLines={1}
      >
        {faker.music.songName()}
      </Text>
    </Animated.View>
  );
}
