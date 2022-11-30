import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function FixedHeader() {
  return (
    <View style={styles.wrapper}>
      <Text>FixedHeader</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    height: 50,
    padding: 10,
  },
})
