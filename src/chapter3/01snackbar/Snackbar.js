import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import Icon from "react-native-vector-icons/dist/AntDesign";
import { getBottomSpace } from "react-native-iphone-x-helper";

export default function Snackbar() {
  return (
    <Animated.View style={styles.snackbarPosition}>
      <View style={styles.snackbarBg}>
        <Icon name="exclamationcircle" size={20} color="white" />
        <Text style={styles.snackbarText}>저런, 뭔가 잘못된게 아닐까요?</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  snackbarPosition: {
    position: "absolute",
    bottom: getBottomSpace() + 10,
    width: "100%",
  },
  snackbarBg: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#222",
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  snackbarText: {
    fontSize: 15,
    color: "white",
    marginLeft: 10,
  },
});
