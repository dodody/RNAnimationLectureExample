import React from "react";
import { View, Animated, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const { width, height } = Dimensions.get("window");
export default function PlayListMiniButtons({ play, heightAnim }) {
  return (
    <Animated.View
      style={{
        flexDirection: "row",
        alignItems: "center",
        opacity: heightAnim.interpolate({
          inputRange: [0, height / 2],
          outputRange: [1, 0],
        }),
      }}
    >
      {play ? (
        <View
          style={{
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="play" color="white" size={24} />
        </View>
      ) : (
        <View
          style={{
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon name="pause" color="white" size={24} />
        </View>
      )}
      <View
        style={{
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="skip-next" color="white" size={24} />
      </View>
    </Animated.View>
  );
}
