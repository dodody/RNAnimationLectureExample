import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import AnimatedDecay from "./src/chapter2/05animatedDecay/AnimatedDecay";
import AnimatedCombining from "./src/chapter2/06animatedCombining/AnimatedCombining";

import AnimatedInterpolation from "./src/chapter2/07animatedInterpolation/AnimatedInterpolation";

import Snackbar from "./src/chapter3/01snackbar/Snackbar";
import SnackbarAnimation from "./src/chapter3/01snackbar/SnackbarAnimation";
import DrawerMenu from "./src/chapter3/02drawerMenu/DrawerMenu";

const App = () => {
  return (
    <View style={styles.wrapper}>
      {/*  */}
      {/* 프로젝트들 */}
      <AnimatedInterpolation />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffa100",
  },
});

export default App;
