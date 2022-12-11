import React from "react";
import { View, Text, Dimensions, SafeAreaView } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
const { width, height } = Dimensions.get("window");
import { BOTTOM_HEIGHT } from "../utils";

export default function PlaylistFull() {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: height,
        top: 0,
        left: 0,
        zIndex: 1,
        marginTop: -(height - BOTTOM_HEIGHT - getBottomSpace()),
        paddingTop: getStatusBarHeight(),
        backgroundColor: "red",
      }}
    >
      <Text>PlaylistFull</Text>
    </View>
  );
}
