import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  PanResponder,
  SafeAreaView,
  Dimensions,
} from "react-native";
import moment from 'moment';


export default function PanresponderBox() {
  const panAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const WIDTH = Dimensions.get("window").width;
  const HEIGHT = Dimensions.get("window").height;
  const [gesture, setGesture] = useState({
    _accountsForMovesUpTo: 0, // ?
    numberActiveTouches: 0, // 터치 중인 손가락 갯수
    stateID: 0,
    // 터치 아이디, 제스쳐가 움직이면서 값이 변경되며, 사용처가 불분명하다.
    moveX: 0,
    moveY: 0,
    // 최신 좌표
    dx: 0,
    dy: 0,
    // 터치 시작 후 누적거리
    x0: 0,
    y0: 0,
    // 이동 직전의 좌표, 시작좌표
    vx: 0,
    vy: 0,
    // 제스쳐의 현재 속도
  });

  const panResponder = PanResponder.create({
    // panresponder 옵션
    // ! true와 false의 차이를 알아봐야한다.
    //터치 이벤트에 반응할지를 결정한다.
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    //
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,

    // panresponder 핸들러
    // onPanResponderReject: (e, gestureState) => {
    //   console.log("onPanResponderReject :", gestureState);
    // },
    onPanResponderGrant: (e, gestureState) => {
      console.log("onPanResponderMove 시작할 떄 : ", gestureState);
      // console.log("onPanResponderGrant 시작할 떄 : ", gestureState);
      // panAnim.extractOffset();
      panAnim.setValue({
        x: gestureState.x0 - 30,
        y: gestureState.y0 - 30,
      });
    },
    // onPanResponderStart: (e, gestureState) => {
    //   console.log("onPanResponderStart :", gestureState);
    // },
    // onPanResponderEnd: (e, gestureState) => {
      //   console.log("onPanResponderEnd :", gestureState);
      // },
      onPanResponderMove: (e, gestureState) => {
        console.log("onPanResponderMove 움질일 떄 : ", gestureState);
          setGesture(gestureState);
          panAnim.setValue({
            x: gestureState.moveX - 30,
            y: gestureState.moveY - 30,
          });
      // Animated.timing(panAnim, {
      //   toValue: { x: gestureState.dx, y: gestureState.dy },
      //   useNativeDriver: true,
      // }).start();
      // console.log("onPanResponderMove :", gestureState);
      // setGesture(gestureState);
    },

    onPanResponderRelease: (e, gestureState) => {
      console.log("onPanResponderRelease 끝날 때 :", gestureState);
    },

    // onPanResponderTerminate: (e, gestureState) => {
    //   console.log("onPanResponderTerminate :", gestureState);
    // },

    // onMoveShouldSetPanResponder
    // onMoveShouldSetPanResponderCapture
    // onStartShouldSetPanResponder
    // onStartShouldSetPanResponderCapture
    // onPanResponderReject
    // onPanResponderGrant
    // onPanResponderStart
    // onPanResponderEnd
    // onPanResponderRelease
    // onPanResponderMove
    // onPanResponderTerminate
    // onPanResponderTerminationRequest
    // onShouldBlockNativeResponder
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ position: "absolute", top: 100}}>
        <Text>numberActiveTouches : {gesture.numberActiveTouches}</Text>
        <Text>stateID : {gesture.stateID}</Text>
        <Text>moveX : {gesture.moveX}</Text>
        <Text>moveY : {gesture.moveY}</Text>
        <Text>vx : {gesture.vx}</Text>
        <Text>vy : {gesture.vy}</Text>
        <Text>dx : {gesture.dx}</Text>
        <Text>dy : {gesture.dy}</Text>
        <Text>x0 : {gesture.x0}</Text>
        <Text>y0 : {gesture.y0}</Text>
      </View>

      <Animated.Text
        {...panResponder.panHandlers}
        style={{
          position: "absolute",
          top: 10,
          borderWidth: 1,
          transform: [{ translateX: panAnim.x }, { translateY: panAnim.y }],
          fontSize: 60,
        }}
      >
        🍊
      </Animated.Text>
    </SafeAreaView>
  );
}
