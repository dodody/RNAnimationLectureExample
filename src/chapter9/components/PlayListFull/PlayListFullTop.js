import { View, Text } from "react-native";
import React, { cloneElement } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function PlayListFullTop() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <IconBox name="chevron-down" />
        <View style={{ width: 44 }} />
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#00000050",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#ffffff20",
            paddingVertical: 2,
            paddingHorizontal: 12,
            height: 24,
            borderRadius: 100,
            marginTop: -2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: "#ffffff80", fontWeight: "bold", fontSize: 11 }}
          >
            노래
          </Text>
        </View>
        <View
          style={{
            paddingVertical: 2,
            paddingHorizontal: 10,
            borderRadius: 100,
            height: 24,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: "#ffffff80", fontWeight: "bold", fontSize: 11 }}
          >
            동영상
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <IconBox name="cast" />
        <IconBox name="dots-vertical" />
      </View>
    </View>
  );
}

function IconBox({ name }) {
  return (
    <View
      style={{
        width: 44,
        height: 44,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon name={name} size={20} color="white" />
    </View>
  );
}
