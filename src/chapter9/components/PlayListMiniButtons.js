import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function PlayListMiniButtons({ play }) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
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
    </View>
  );
}
