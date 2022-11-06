import React, { useRef } from 'react'
import { Button, Animated } from 'react-native'

export default function AnimatedInterpolation() {
  const translateXAmim = useRef(new Animated.Value(0)).current;

  const onButtonPress = () => {
    translateXAmim.setValue(0);
    Animated.timing(translateXAmim, {
      toValue: 100,
      duration: 1000, 
      useNativeDriver: true,
    }).start();
  }

  return (
    <>
      <Button title="작동버튼" onPress={onButtonPress} />
      <Animated.Text style={{
        fontSize: 50,
        transform: [
          { translateX: translateXAmim },
          {
            translateY: translateXAmim.interpolate({
              inputRange: [0, 100], 
              outputRange: [0, 200],
              // inputRange: [0, 50, 70, 95, 100], 
              // outputRange: [0, 220, 180, 210, 200],
            })
          },
          {
            rotate: translateXAmim.interpolate({
              inputRange: [0, 100],
              outputRange: ['0deg', '360deg']
            })
          }, 
        ], 

      }}>zz🍊</Animated.Text>
    </>
  )
}