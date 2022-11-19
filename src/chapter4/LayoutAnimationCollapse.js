import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from "react-native";
import HomeBtnLayout from "../HomeBtnLayout";
import data from "../data/collapse";

export default function LayoutAnimationCollapse() {
  const [expanded, setExpanded] = useState();
  const onLayoutAnimPress = (i) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((el) => (el === i ? undefined : i));
  };

  return (
    <SafeAreaView>
      <HomeBtnLayout />
      <Text style={{ padding: 30, fontSize: 20 }}>LayoutAnimationCollapse</Text>
      {data.map((value, index) => (
        <View key={index}>
          <TouchableWithoutFeedback onPress={() => onLayoutAnimPress(index)}>
            <View style={styles.collapseQuestion}>
              <Text style={styles.collapseQuestionText}>
                {index + 1}) {value.q}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {expanded === index && (
            <View style={styles.collapseAnswer}>
              <Text style={styles.collapseAnswerText}>{value.a}</Text>
            </View>
          )}
        </View>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  collapseQuestion: {
    backgroundColor: "#006aff",
    borderBottomColor: "#428df5",
    borderBottomWidth: 1,
    width: "100%",
    padding: 20,
  },
  collapseQuestionText: {
    color: "white",
    fontSize: 14,
  },
  collapseAnswer: {
    backgroundColor: "#f4f4f4",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    width: "100%",
    padding: 20,
    paddingLeft: 40,
  },
  collapseAnswerText: {
    color: "#333",
  },
});
