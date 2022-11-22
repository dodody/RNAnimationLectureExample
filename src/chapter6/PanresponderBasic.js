import React, { useRef, useState } from "react";
import { View, Text, PanResponder, Animated } from "react-native";

// dx: 터치시작 후 누적거리
// dy: 터치시작 후 누적거리
// moveX: 제일 최신 좌표
// moveY: 제일 최신 좌표

export default function PanresponderBasic() {
  const panAnim = useRef(new Animated.ValueXY()).current;
  const panResponder = React.useRef(
    PanResponder.create({
      // ----------------------------------------
      // panresponder 옵션
      // ----------------------------------------
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      // 터치 이벤트 중 onPanResponderStart 반응을 할지
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      // 터치 이벤트 중 onPanResponderMove 반응을 할지
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      // 하위 뷰가 첫 번째 터치에서 응답자가 되는 것을 방지해야 합니까?
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      // 하위 뷰가 후속 터치의 응답자가 되는 것을 방지해야 합니까?

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
        console.log("onPanResponderStart", gestureState);
        panAnim.setOffset({
          x: panAnim.x._value,
          y: panAnim.y._value,
        });
      },

      // 말 그대로 움직일 때
      // ! Animated event 메소드를 배운적이 없다. 간략히 설명하고 가기
      // panAnim.setValue({ x: gestureState.moveX, y: gestureState.moveY });

      // Aniamted.event는 panresponder onPanResponderMove와 onscroll 핸들러에서만 사용되는 메소드 입니다.
      // panresponder의 경우, Animated.event([null, gestureState argument], {listner, useNativeDriver})
      // Animated.event([null, {}], {listner, useNativeDriver})
      onPanResponderMove: Animated.event(
        // dx와 dy값은 이동한 거리를 나타내니까, x와 y 값을 넣어주면 된다.
        // 그러면 gestureState.dx 값과 같은 값이 panAnimX에 들어가는 것과 같은 맥락이다.
        [null, { dx: panAnim.x, dy: panAnim.y }],
        {
          listener: (event, gestureState) =>
            console.log("onPanResponderMove", gestureState.dx, panAnim.x),
          useNativeDriver: false,
        }
      ),
      // 터치 이벤트가 끝났을 떄
      onPanResponderEnd: (evt, gestureState) => {},
      // onPanResponderRelease가 작동하기 전에 작동
      onPanResponderRelease: (evt, gestureState) => {
        console.log("onPanResponderRelease ", gestureState);
        panAnim.flattenOffset(); // offset 값을 value로 넣어주는
      },
    })
  ).current;

  return (
    <View style={{ flex: 1 }}>
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
