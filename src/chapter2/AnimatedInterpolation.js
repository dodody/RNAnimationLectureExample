import React, { useRef } from 'react'
import { Animated, View, Text, Button } from 'react-native'

// 가로 세로 30, scale 너비 1 > 2
export default function AnimatedInterpolate() {
  const scaleAnim = useRef(new Animated.Value(1)).current
  const widthdd = useRef(new Animated.Value(30)).current

  const onButtonPress = () => {
    Animated.timing(scaleAnim, {
      toValue: 2,
      useNativeDriver: false,
    }).start()

    Animated.timing(widthdd, {
      toValue: 60,
      useNativeDriver: false,
    }).start()
  }

  return (
    <>
      <Button title="보간법 실험" onPress={onButtonPress} />
      <Animated.View
        style={{
          width: widthdd,
          height: 30,
          backgroundColor: scaleAnim.interpolate({
            inputRange: [1, 2],
            outputRange: ['#333', '#aff100'],
          }),
          transform: [
            { scale: scaleAnim },
            {
              rotate: scaleAnim.interpolate({
                inputRange: [1, 1.7, 2],
                outputRange: ['0deg', '450deg', '360deg'],
              }),
            },
          ],
        }}
      />
    </>
  )
}
