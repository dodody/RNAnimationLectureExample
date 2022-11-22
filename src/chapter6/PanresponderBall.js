import React, { useRef } from "react";
import {
  View,
  Text,
  Animated,
  PanResponder,
  SafeAreaView,
  Alert,
} from "react-native";

export default function PanresponderBall() {
  const panAnim = useRef(new Animated.ValueXY(0)).current;
  const panResponder = PanResponder.create({
    // ----------------------------------------
    // panresponder 옵션
    // ----------------------------------------
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    // 터치 이벤트 중 onPanResponderStart 반응을 할지
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    // 터치 이벤트 중 onPanResponderMove 반응을 할지

    // ----------------------------------------
    // panresponder 응답 리스폰스
    // view에서 터치를 시도할때 둘중 하나가 응답을 하게 된다.
    // ----------------------------------------
    onPanResponderGrant: (evt, gestureState) => {},
    // 터치가 성공적으로 작동할 때
    onPanResponderReject: (evt, gestureState) => {},
    // 현재 다른 액션을 하고 있고, 응답할 수 없을 때

    // ----------------------------------------
    // panresponder 터치 핸들러
    // ----------------------------------------
    // 시작값을 잘 넣어줘야 합니다. 안그러면 애니메이션이 튑니다
    onPanResponderStart: (evt, gestureState) => {
      console.log("onPanResponderGrant");
      // panAnim.setOffset({
      //   x: panAnim.x._value,
      //   y: panAnim.y._value,
      // });
    },

    // 말 그대로 움직일 때
    onPanResponderMove: Animated.event(
      [null, { dx: panAnim.x, dy: panAnim.y }],
      {
        listener: (evt, gestureState) => {
          console.log("onPanResponderMove : ", gestureState);
          // {"_accountsForMovesUpTo": 195611159.62391666, "dx": 63.66667175292969, "dy": 103.33334350585938, "moveX": 105, "moveY": 168, "numberActiveTouches": 1, "stateID": 0.5676385853410391, "vx": 0.0042177695229660556, "vy": 0, "x0": 41.33332824707031, "y0": 64.66665649414062}
        },
        useNativeDriver: false,
      }
    ),

    // 터치 이벤트가 끝났을 떄
    onPanResponderEnd: (evt, gestureState) => {},
    onPanResponderRelease: (evt, gestureState) => {
      // panAnim.flattenOffset(); // offset 값을 value로 넣어주는
      Animated.decay(panAnim, {
        velocity: { x: gestureState.vx, y: gestureState.vy },
        deceleration: 0.997,
        useNativeDriver: true,
      }).start();
    },
  });

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
      <Animated.View
        // 구조분해할당
        style={{
          transform: [{ translateX: panAnim.x }, { translateY: panAnim.y }],
          position: "absolute",
          bottom: 10,
          width: 50,
          height: 50,
          backgroundColor: "green",
          borderRadius: 25,
        }}
      />
    </View>
  );
}
