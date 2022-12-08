import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Animated,
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { CATEGORY, CATEGORY_HEADER_HEIGHT, LOGO_HEADER_HEIGHT } from "../utils";

export default function HeaderCategory({
  focus,
  setFocus,
  headerAnim,
  headerBgAnim,
}) {
  const onPress = (index) => {
    const Focus = focus === index ? undefined : index;
    setFocus(Focus);
  };

  return (
    <>
      <Animated.View
        style={[
          {
            height: CATEGORY_HEADER_HEIGHT,
            borderBottomWidth: 0.5,
            borderBottomColor: headerBgAnim.interpolate({
              inputRange: [0, 70],
              outputRange: ["#dddddd00", "#ddd"],
            }),
            paddingTop: getStatusBarHeight() + 10,
            paddingBottom: 10,
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: headerBgAnim.interpolate({
              inputRange: [0, 70],
              outputRange: ["#11111100", "#111"],
            }),
            zIndex: 1,
          },
        ]}
      >
        <ScrollView horizontal={true}>
          <View style={{ flexDirection: "row" }}>
            {CATEGORY.map((value, index) => {
              const isFocused = focus === index;
              return (
                <TouchableHighlight
                  underlayColor={"#ffffff50"}
                  style={{ marginRight: 6, borderRadius: 8 }}
                  key={index}
                  onPress={() => onPress(index)}
                >
                  <View
                    style={[
                      {
                        height: 28,
                        paddingHorizontal: 12,
                        justifyContent: "center",
                        borderRadius: 8,
                        borderWidth: 0.5,
                      },
                      isFocused
                        ? {
                            borderColor: "#ffffff",
                            backgroundColor: "#ffffff",
                          }
                        : {
                            borderColor: "#ffffff50",
                            backgroundColor: "#ffffff10",
                          },
                    ]}
                  >
                    <Text
                      style={[
                        isFocused
                          ? { color: "#222", fontSize: 14 }
                          : { color: "white", fontSize: 14 },
                      ]}
                      key={index}
                    >
                      {value}
                    </Text>
                  </View>
                </TouchableHighlight>
              );
            })}
          </View>
        </ScrollView>
      </Animated.View>
    </>
  );
}
