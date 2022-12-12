import React from "react";
import { View, Animated, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default function PlayListImage({ heightAnim }) {
  return (
    <View style={{ justifyContent: "center", flex: 1 }}>
      <Animated.Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{
          // ! 이거 강제로 추가해버림,,,
          // 이거 큰 버전에서 문제 있을 까봐 한거같음
          marginTop: heightAnim.interpolate({
            inputRange: [0, height],
            outputRange: [100, -height / 4],
          }),
          //
          width: heightAnim.interpolate({
            inputRange: [0, height],
            outputRange: [40, width * 0.8],
          }),
          height: heightAnim.interpolate({
            inputRange: [0, height],
            outputRange: [40, width * 0.8],
          }),
          marginLeft: heightAnim.interpolate({
            inputRange: [0, height],
            outputRange: [10, width * 0.1],
          }),
        }}
      />
    </View>
  );
}
