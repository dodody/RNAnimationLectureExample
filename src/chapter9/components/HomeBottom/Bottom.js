import React from "react";
import { View, Text, Animated } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { BOTTOM_HEIGHT } from "../../utils";

export default function Bottom({ heightAnim }) {
  return (
    <Animated.View
      style={{
        transform: [{ translateY: heightAnim }],
        paddingBottom: getBottomSpace(),
        backgroundColor: "#222222",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: BOTTOM_HEIGHT,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtomItem title="홈" icon="home-filled" />
        <ButtomItem title="둘러보기" icon="explore" />
        <ButtomItem title="보관함" icon="library-music" />
      </View>
    </Animated.View>
  );
}

function ButtomItem({ title, icon }) {
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <Icon name={icon} size={20} color="white" />
      <Text style={{ color: "white", marginTop: 4, fontSize: 12 }}>
        {title}
      </Text>
    </View>
  );
}
