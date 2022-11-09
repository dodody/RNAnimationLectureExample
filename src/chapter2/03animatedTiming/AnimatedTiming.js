import React, { useRef } from 'react'
import { Animated, View, Text, Button } from 'react-native'

export default function AnimatedTiming() {
  const translateXAnim = useRef(new Animated.Value(-100)).current
  const onTimingPress = () => {
    Animated.timing(translateXAnim, {
      toValue: 100,
    }).start()

    translateXAnim.setValue(-100)
    Animated.timing(translateXAnim, {
      toValue: 100,
      duration: 1000,
      delay: 0,
      isInteraction: true,
      useNativeDriver: true,
      // easing: Easing.inOut(Easing.ease),
      // easing: Easing.in(Easing.bounce),
      // easing: Easing.out(Easing.circle),
      // easing: Easing.out(Easing.back(1)), // 살짝 밀리는 듯한 애니메이션
      // easing: Easing.in(Easing.elastic(1.2)), //탄성
    }).start()
    // Animated.decay(translateXAnim, {
    //   velocity: 2,
    //   deceleration: 0.995,
    //   useNativeDriver: true,
    // }).start();
  }

  return (
    <View>
      <Button title="timing animation" onPress={onTimingPress} />
      <Animated.Text
        style={{ fontSize: 60, transform: [{ translateX: translateXAnim }] }}
      >
        🍊
      </Animated.Text>
    </View>
  )
}
