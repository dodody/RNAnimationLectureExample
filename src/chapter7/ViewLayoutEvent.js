import { View, Text } from 'react-native'
import React from 'react'

export default function ViewLayoutEvent() {
  return (
    <View
      onLayout={(e) => console.log(e)}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>ViewLayoutEvent</Text>
    </View>
  )
}
