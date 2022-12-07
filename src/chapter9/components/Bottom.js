import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getBottomSpace } from "react-native-iphone-x-helper";

export default function Bottom({ BOTTOM_HEIGHT }) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#222222",
        paddingVertical: 6,
        paddingBottom: getBottomSpace(),
        height: BOTTOM_HEIGHT,
      }}
    >
      <ButtomItem title="홈" icon="home-filled" />
      <ButtomItem title="둘러보기" icon="explore" />
      <ButtomItem title="보관함" icon="library-music" />
    </View>
  );
}

function ButtomItem({ title, icon }) {
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <Icon name={icon} size={20} color="white" />
      <Text style={{ color: "white", marginTop: 6, fontSize: 12 }}>
        {title}
      </Text>
    </View>
  );
}
