import React, { useEffect } from "react";
import {
  Dimensions,
  Text,
  Animated,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { faker } from "@faker-js/faker";
const { width, height } = Dimensions.get("window");

export default function PlayListMini({ heightAnim, play, panResponder }) {
  useEffect(() => {
    if (play) {
      Animated.timing(heightAnim, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  }, [play]);

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        zIndex: 2,
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
          <TouchableOpacity onPress={() => console.log(1342342)}>
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
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ borderWidth: 1 }}
            onPress={() => console.log(13424234232)}
          >
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
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => console.log(1234234234234)}>
          <View
            style={{
              width: 60,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "red",
            }}
          >
            <Icon name="skip-next" color="white" size={24} />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
}
