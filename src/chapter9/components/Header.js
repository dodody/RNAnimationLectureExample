import { Animated, Image, SafeAreaView, StyleSheet, View } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";

export default function Header({ headerHeight, headerAnim }) {
  return (
    <SafeAreaView>
      <Animated.View
        style={[
          styles.wrapper,
          {
            opacity: headerAnim.interpolate({
              inputRange: [0, 100],
              outputRange: [1, 0],
            }),
            marginTop: headerAnim.interpolate({
              inputRange: [0, 100],
              outputRange: [0, -100],
            }),
          },
        ]}
      >
        <Image
          style={{ width: 90, height: 30 }}
          source={require("../../asset/chapter9/logo1.png")}
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
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
