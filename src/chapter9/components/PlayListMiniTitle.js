import { View, Text } from "react-native";
import { faker } from "@faker-js/faker";
import React from "react";

export default function PlayListMiniTitle() {
  return (
    <View style={{ marginLeft: 10, flex: 1 }}>
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
    </View>
  );
}
