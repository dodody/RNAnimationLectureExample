import React, { useRef } from "react";
import { View, Text, PanResponder, Animated } from "react-native";

export default function PanresponderBasic() {
  const panAnim = useRef(new Animated.ValueXY()).current;
  const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        console.log("onPanResponderGrant : 제스쳐가 시작될 때", gestureState);
        panAnim.setOffset({
          x: panAnim.x._value,
          y: panAnim.y._value,
        });
        // ! 제스쳐가 시작 될 떄
        // The gesture has started. Show visual feedback so the user knows what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      // ! 터치에 움직임을 줄 때
      onPanResponderMove: Animated.event(
        [
          null, // raw event arg ignored
          { dx: this._panX },
        ], // gestureState arg
        { listener: (event, gestureState) => console.log(event, gestureState) } // Optional async listener
      ),
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // ! 모든 터치가 끝났을 때
        panAnim.flattenOffset();
        console.log(
          "onPanResponderRelease : 모든 터치가 끝났을 때",
          gestureState
        );
        // The user has released all touches while this view is the responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        console.log("onPanResponderTerminate", gestureState);
        // 다른 구성 요소가 응답자가 되었으므로 이 제스처를 취소해야 합니다.
        // Another component has become the responder, so this gesture should be cancelled
      },
    })
  ).current;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          transform: [{ translateX: panAnim.x }, { translateY: panAnim.y }],
          width: 200,
          height: 200,
          backgroundColor: "orange",
          borderRadius: 100,
        }}
      />
    </View>
  );
}
