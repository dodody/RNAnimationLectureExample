import React, { useState, useEffect, useRef } from "react";
import {
  Alert,
  Animated,
  InteractionManager,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  PanResponder,
} from "react-native";

export default function InteractionManagerIntro() {
  const opacity = useRef(new Animated.Value(0)).current;

  // Running a method after the animation
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
    // 상호 작용/애니메이션이 완료된 후 장기 실행 작업을 예약할 수 있습니다

    const interactionPromise = InteractionManager.runAfterInteractions(() => {
      Alert.alert("Animation is done");
    });

    return () => interactionPromise.cancel(); // 컴포넌트 언마운트 될 떄 애니메이션 취소하는 기능
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.Text
        style={{
          width: 100,
          height: 100,
          opacity,
        }}
      >
        ㅋㅋㅋ
      </Animated.Text>
    </View>
  );
}
