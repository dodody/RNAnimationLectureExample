import React from "react";
import { Dimensions, Text, Animated, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { faker } from "@faker-js/faker";
const { width, height } = Dimensions.get("window");

export default function PlayListMini({ heightAnim, play }) {
  return (
    <View
      style={{
        position: "absolute",
        left: 40 + 20,
        width: width - 40 - 20,
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      {/* music title zone */}
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "center",
          opacity: heightAnim.interpolate({
            inputRange: [0, height / 2],
            outputRange: [1, 0],
          }),
        }}
      >
        <Text style={{ color: "white", fontSize: 12 }} numberOfLines={1}>
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

      {/* music play zone */}
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
    </View>
  );
}
