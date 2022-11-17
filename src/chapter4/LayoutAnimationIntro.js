import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from "react-native";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function LayoutAnimationIntro() {
  const [expanded, setExpanded] = useState(1);
  const [count, setCount] = useState(1);

  const onPress = () => {
    LayoutAnimation.configureNext(
      {
        duration: 300,
        create: { type: "easeIn", property: "scaleX" },
        update: { type: "spring", springDamping: 0.4 },
        delete: { type: "easeIn", property: "scaleY" },
      },
      () => console.log("end"),
      () => console.log("fail")
    );
    // setExpanded(expanded + 1);
    setCount(count + 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Text>LayoutAnimationIntro</Text>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={() => {
          setExpanded(expanded + 1);
        }}
      >
        <Text>LayoutAnimationIntro</Text>
      </TouchableWithoutFeedback>

      {/*  */}
      <Text>Press me to {expanded}!</Text>
      {expanded % 2 === 1 && (
        <View style={{ backgroundColor: "red" }}>
          <Text>I disappear sometimes!</Text>
        </View>
      )}

      {/*  */}
      {count && (
        <View style={{ backgroundColor: "red" }}>
          <Text style={{ fontSize: 60 }}>{count * 10}</Text>
        </View>
      )}
    </View>
  );
}
