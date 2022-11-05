
import React, { useRef } from 'react'
import { StyleSheet, Text, View, Button, Animated } from 'react-native'

export default function AnimatedInterpolation() {
  const translateXAmim = useRef(new Animated.Value(0)).current;
  const onButtonPress = () => {
    translateXAmim.setValue(0);
    Animated.timing(translateXAmim, {
      toValue: 100,
      duration: 1000, 
      useNativeDriver: false, // true
    }).start();
  }

  return (
    <>
      <Button title="작동버튼" onPress={onButtonPress} />
      <Animated.View style={{
        width: 100, 
        height: 100,
        // useNativeDriver를 false로 하니까 됐다! 유후~!
        backgroundColor: translateXAmim.interpolate({
          inputRange: [0, 100],
          outputRange: ['rgb(90,210,244)', 'rgb(224,82,99)'],
        })
      }} />
      <Animated.Text style={{
        fontSize: 50,
        transform: [
          { translateX: translateXAmim },
          {
            translateY: translateXAmim.interpolate({
              inputRange: [0, 100], 
              outputRange: [0, 200],
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

const styles = StyleSheet.create({
})