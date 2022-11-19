import React, { useState } from "react";
import {
  View,
  Text,
  Platform,
  TouchableWithoutFeedback,
  LayoutAnimation,
  Button,
} from "react-native";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function LayoutAnimationIntro() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(1);

  const onButtonPress = () => {
    setShow((value) => !value);
    setCount((value) => value * 10);

    LayoutAnimation.configureNext(
      {
        duration: 500,
        create: { type: "linear", property: "opacity" },
        update: { type: "spring", property: "scaleX", springDamping: 0.4 },
        delete: { type: "easeIn", property: "scaleXY", delay: 300 },
      },
      () => console.log("end"),
      () => console.log("fail")
    );

    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  //
  //
  // 그리고 상태를 컴포넌트와 연결해주겠습니다. 함수에도 연결해줄게요
  //
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="애니메이션 작동!" onPress={onButtonPress} />
      {/*  */}
      <View style={{ width: 300, height: 300 }}>
        <View style={{ backgroundColor: "orange" }}>
          <Text style={{ fontSize: 60 }}>{count * 10}</Text>
        </View>
        {show && (
          <View style={{ backgroundColor: "orange", marginTop: 10 }}>
            <Text style={{ fontSize: 30 }}>보이는 컴포넌트</Text>
          </View>
        )}
      </View>
    </View>
  );
}
