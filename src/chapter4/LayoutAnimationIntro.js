import React, { useState } from 'react'
import { View, Text, Button, LayoutAnimation } from 'react-native'

export default function LayoutAnimationIntro() {
  const [count, setCount] = useState(0)
  const onIncreasePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setCount((value) => value + 1)
  }
  const onDecreasePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setCount((value) => value - 1)
  }

  return (
    <View>
      <Button title="Button" onPress={onIncreasePress} />
      <Button title="Button" onPress={onDecreasePress} />

      {count === 0 && <Text>{count}</Text>}
    </View>
  )
}
