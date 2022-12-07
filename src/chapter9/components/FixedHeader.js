import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
  Animated,
} from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

export default function FixedHeader({ headerAnim, category, focus, setFocus }) {
  const onPress = (index) => {
    const Focus = focus === index ? undefined : index;
    setFocus(Focus);
  };

  return (
    <Animated.View
      style={[
        {
          borderBottomWidth: headerAnim.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 0.5],
          }),
          borderBottomColor: "#ddd",
          paddingTop: getStatusBarHeight() + 10,
          paddingBottom: 10,
          paddingHorizontal: 10,
          paddingTop: 10,
        },
      ]}
    >
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: "row" }}>
          {category.map((value, index) => {
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
                    focus === index
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
                      focus === index
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
  );
}
