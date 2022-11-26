import React, { useRef, useState } from 'react'
import { View, Text, Animated, PanResponder } from 'react-native'

export default function PanresponderBall() {
  const panAnim = useRef(new Animated.ValueXY(0)).current

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: Animated.event(
      [null, { dx: panAnim.x, dy: panAnim.y }],
      { useNativeDriver: false },
    ),

    // 터치 이벤트가 끝났을 떄
    onPanResponderEnd: (evt, gestureState) => {
      Animated.decay(panAnim, {
        velocity: { x: gestureState.vx / 50, y: gestureState.vy / 50 },
        deceleration: 0.998,
        useNativeDriver: true,
      }).start()
    },

    onPanResponderRelease: (evt, gestureState) => {
      setTimeout(() => {
        panAnim.setValue({ x: 0, y: 50 })
        Animated.spring(panAnim, {
          toValue: { x: 0, y: 0 },
          duration: 1000,
          useNativeDriver: true,
        }).start()
      }, 1000)
    },
  })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Animated.View
        {...panResponder.panHandlers}
        onLayout={(e) => console.log(123, e.nativeEvent)}
        // 구조분해할당
        style={{
          transform: [{ translateX: panAnim.x }, { translateY: panAnim.y }],
          position: 'absolute',
          bottom: 20,
          borderRadius: 100,
        }}
      >
        <Text style={{ fontSize: 100 }}>🏀</Text>
      </Animated.View>
    </View>
  )
}
