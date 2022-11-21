import React, { useRef } from "react";
import { View, Text, Animated, PanResponder } from "react-native";

export default function PanresponderBall() {
  const panAnim = useRef(new Animated.ValueXY(0)).current;
  const panResponder = PanResponder.create({
    // panresponder 옵션
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    // panresponder 액션 핸들러
    onPanResponderGrant: (evt, gestureState) => {
      console.log("onPanResponderGrant : 제스쳐가 시작될 때", gestureState);
      panAnim.extractOffset(); // value에 값을 주는 것
      //----------------------------------
      // const animValue = Animated.Value(15);
      // animValue.setOffset(5);

      // animValue.extractOffset();
      //value = 0;
      //offset = 20;
      //----------------------------------
    },

    onPanResponderMove: (evt, gestureState) => {
      // console.log("onPanResponderMove");
      Animated.event([null, { dx: panAnim.x, dy: panAnim.y }], {
        useNativeDriver: true,
        listener: (event, gestureState) =>
          console.log("dody", event, gestureState),
      });
    },

    // onPanResponderMove: (evt, gestureState) => {
    //   Animated.event([null, { dx: panAnim.x, dy: panAnim.y }], {
    //     useNativeDriver: true,
    //     listener: (event, gestureState) =>
    //       console.log("dody", event, gestureState),
    //   });
    // },

    onPanResponderRelease: (evt, gestureState) => {
      console.log("onPanResponderRelease : 제스쳐가 끝날 때", gestureState);
      // 애니메이션이 끝날 떄 속도를 알 수 있으니까, 터치를 놓았을때의 속도를 사용해서 하는 셈.
      Animated.decay(panAnim, {
        velocity: { x: gestureState.vx, y: gestureState.vy },
        useNativeDriver: true,
      }).start();
      // panAnim.flattenOffset();
      //----------------------------------
      // const animValue = Animated.Value(15);
      // animValue.setOffset(5);

      // animValue.flattenOffset();

      // value = 20;
      // offset = 0;
      //----------------------------------
    },
    onPanResponderTerminate: (evt, gestureState) => {
      console.log("onPanResponderTerminate");
      // Another component has become the responder, so this gesture
      // should be cancelled
    },
    // onShouldBlockNativeResponder: (evt, gestureState) => {
    //   console.log("onShouldBlockNativeResponder");
    //   // Returns whether this component should block native components from becoming the JS
    //   // responder. Returns true by default. Is currently only supported on android.
    //   return true;
    // },
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        // 구조분해할당
        {...panResponder.panHandlers}
        style={{
          transform: [{ translateX: panAnim.x }, { translateY: panAnim.y }],
          width: 50,
          height: 50,
          backgroundColor: "green",
          borderRadius: 25,
        }}
      />
    </View>
  );
}
