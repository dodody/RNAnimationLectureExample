import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  SafeAreaView,
  PanResponder,
} from "react-native";
const FONTS = [
  {
    title: { fontSize: 20, lineHeight: 32 },
    body: { fontSize: 12 },
  },
  {
    title: { fontSize: 24, lineHeight: 38 },
    body: { fontSize: 14 },
  },
  {
    title: { fontSize: 30, lineHeight: 40 },
    body: { fontSize: 15 },
  },
  {
    title: { fontSize: 40, lineHeight: 50 },
    body: { fontSize: 19 },
  },
];

const BOX_SIZE = 50;
// 1 클릭으로 상태가 바뀌게 (애니메이션 영역은 아님)
// 2. 클릭으로 상태가 바뀔때 인터렉션이 들어가게
// 3. 버튼을 드래그들롭으로 컨트롤할 수 있게
export default function PanresponderFontSlider() {
  const [step, setStep] = useState(0);
  const stepAnim = useRef(new Animated.Value(0)).current;

  const onPress = (index) => {
    setStep(index);
    Animated.spring(stepAnim, {
      toValue: BOX_SIZE * index,
      friction: 7,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderStart: (evt, gestureState) => {
      stepAnim.setValue(BOX_SIZE * step);
    },
    // dx에 현재 stepAnim의 값을 할당을 해주는 셈인거야,
    onPanResponderMove: (evt, gestureState) => {
      stepAnim.setValue(gestureState.dx + BOX_SIZE * step);
    },
    // 터치 이벤트가 끝났을 떄
    onPanResponderEnd: (evt, gestureState) => {
      // ! 위치를 보고 가까운 쪽에 붙을 예정
      const fontStep = step + Math.round(gestureState.dx / 50);
      const toValue = fontStep * BOX_SIZE;
      setStep(fontStep);
      Animated.spring(stepAnim, {
        toValue,
        friction: 7,
        tension: 40,
        useNativeDriver: true,
      }).start();
    },
  });

  return (
    // 전체 레이이아웃
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 80,
      }}
    >
      {/* box 속 layout */}
      <View
        style={{
          width: 300,
          height: 200,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {/* 텍스트 크기 영역 */}
        <View style={{ marginBottom: 20 }}>
          <Text style={FONTS[step].title}>Font step 1</Text>
          <Text style={FONTS[step].body}>anjsrk emfdjrksms xprtmxm</Text>
        </View>

        {/* 컨트롤러 wrapper */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: BOX_SIZE,
          }}
        >
          {/* 가로줄 */}
          <View
            style={{
              position: "absolute",
              width: BOX_SIZE * 3,
              left: BOX_SIZE / 2,
              marginTop: 10,
              height: 1,
              backgroundColor: "#d2d2d2",
            }}
          />

          {/* 세로줄 or 동그라미 */}
          {[...Array(4)].map((value, index) => (
            <TouchableWithoutFeedback onPress={() => onPress(index)}>
              <View
                style={{
                  width: BOX_SIZE,
                  height: BOX_SIZE,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 100,
                    justifyContent: "center",
                    backgroundColor: "#d2d2d2",
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          ))}

          {/* 동그라미 */}
          <Animated.View
            {...panResponder.panHandlers}
            style={{
              width: BOX_SIZE,
              height: BOX_SIZE,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              left: 0,
              transform: [{ translateX: stepAnim }],
            }}
          >
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 100,
                backgroundColor: "#222",
              }}
            />
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
}
