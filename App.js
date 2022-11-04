import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import AnimatedDecay from "./src/chapter2/05animatedDecay/AnimatedDecay";
import AnimatedCombining from "./src/chapter2/06animatedCombining/AnimatedCombining";

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      {/*  */}
      {/* 프로젝트들 */}
      <AnimatedCombining />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#ffa100",
  },
});

export default App;
