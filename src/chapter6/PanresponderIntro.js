import { View, Text, Animated, PanResponder } from "react-native";
import React, { useState } from "react";

export default function PanresponderIntro() {
  const [status, setStatus] = useState({
    dx: 0,
    dy: 0,
    moveX: 0,
    moveY: 0,
    vx: 0,
    vy: 0,
    x0: 0,
    y0: 0,
  });

  const panResponder = PanResponder.create({
    // permission method
    // start, move 감지를 해도 되겠는가를 물어보는 메소드
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    //
    // response method
    // 응답이 잘 되는지를 물어보는 메소드
    onPanResponderGrant: (e, gestureState) => {},
    // 터치가 성공적으로 작동할 떄
    onPanResponderReject: (e, gestureState) => {},
    // 현재 다른 액션을 하고 있고, 응답할 수 없을 떄

    //touch method
    // 본격적인 터치 핸들러
    onPanResponderStart: (e, gestureState) => {
      setStatus({ x0: gestureState.x0, y0: gestureState.y0 });
    },
    onPanResponderMove: (e, gestureState) => {
      setStatus({ ...gestureState, x0: status.x0, y0: status.y0 });
    },
    onPanResponderEnd: (e, gestureState) => {}, // release가 작동 되기 전에 작동
    onPanResponderRelease: (e, gestureState) => {},
  });

  const MOVE_X_SIZE = Math.floor(status.moveX - status.x0);
  const MOVE_Y_SIZE = Math.floor(status.moveY - status.y0);
  return (
    <View
      {...panResponder.panHandlers}
      style={{ backgroundColor: "orange", flex: 1 }}
    >
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        {MOVE_X_SIZE > 0 ? (
          <Text>{MOVE_X_SIZE} 만큼 오른쪽으로 가는 중</Text>
        ) : (
          <Text>{-MOVE_X_SIZE} 만큼 왼쪽으로 가는 중</Text>
        )}
        {/*  */}
        {MOVE_Y_SIZE < 0 ? (
          <Text>{-MOVE_Y_SIZE} 만큼 위로 가는 중</Text>
        ) : (
          <Text>{MOVE_Y_SIZE} 만큼 아래로 가는 중</Text>
        )}
      </View>
      {/* 실시간으로 변화는 정보 */}
      <View
        style={{
          position: "absolute",
          bottom: 100,
          flex: 1,
          backgroundColor: "orange",
        }}
      >
        {/* dx, dy는 터치 시작 후 누적거리라기 보다, 업데이트가 자주되어 터치를 하는 방향성을 나타낼 수 있을 듯하다. */}
        <Text>dx: {status.dx}</Text>
        <Text>dy: {status.dy}</Text>
        <Text>moveX: {status.moveX}</Text>
        <Text>moveY: {status.moveY}</Text>
        <Text>vx: {status.vx}</Text>
        <Text>vy: {status.vy}</Text>
        <Text>x0: {status.x0}</Text>
        <Text>y0: {status.y0}</Text>
      </View>
    </View>
  );
}
