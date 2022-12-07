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
        height: BOTTOM_HEIGHT,
      }}
    >
      <View style={{ alignItems: "center", flex: 1 }}>
        <Icon name="home-filled" size={20} color="white" />
        <Text style={{ color: "white", marginTop: 6, fontSize: 12 }}>홈</Text>
      </View>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Icon name="explore" size={20} color="white" />
        <Text style={{ color: "white", marginTop: 6, fontSize: 12 }}>
          둘러보기
        </Text>
      </View>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Icon name="library-music" size={20} color="white" />
        <Text style={{ color: "white", marginTop: 6, fontSize: 12 }}>
          보관함
        </Text>
      </View>
    </View>
  );
}
