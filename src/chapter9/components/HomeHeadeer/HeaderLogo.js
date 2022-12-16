import React from "react";
import { Animated, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import Icon from "react-native-vector-icons/MaterialIcons";
import { LOGO_HEADER_HEIGHT } from "../../utils";

export default function Header({ headerAnim, headerBgAnim }) {
  return (
    <Animated.View
      style={{
        backgroundColor: headerBgAnim.interpolate({
          inputRange: [0, 70],
          outputRange: ["#11111100", "#111"],
        }),
      }}
    >
      <Animated.View
        style={[
          styles.wrapper,
          {
            opacity: headerAnim.interpolate({
              inputRange: [0, LOGO_HEADER_HEIGHT],
              outputRange: [1, 0],
            }),
            marginTop: headerAnim.interpolate({
              inputRange: [0, LOGO_HEADER_HEIGHT],
              outputRange: [0, -(getStatusBarHeight() + 25)],
            }),
          },
        ]}
      >
        <Image
          style={{ width: 90, height: 30 }}
          source={require("../../../asset/chapter9/logo1.png")}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={styles.iconWrapper}>
            <Icon name="cast" size={24} color="white" />
          </View>
          <View style={styles.iconWrapper}>
            <Icon name="search" size={24} color="white" />
          </View>
          <View style={styles.iconWrapper}>
            <View style={styles.profileWrapper}>
              <Icon name="perm-identity" size={24} color="white" />
            </View>
          </View>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: LOGO_HEADER_HEIGHT,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 10,
    paddingHorizontal: 10,
    zIndex: 10,
  },
  iconWrapper: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  profileWrapper: {
    width: 32,
    height: 32,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
