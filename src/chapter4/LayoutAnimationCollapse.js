import React, { useState } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from 'react-native'
import { collapseData } from '../../utils/data'

export default function LayoutAnimationCollapse() {
  const [expanded, setExpanded] = useState()

  const onPress = (i) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setExpanded((value) => (value === i ? undefined : i))
  }

  return (
    <SafeAreaView>
      {/*  */}
      {collapseData.map((value, index) => (
        <View key={index}>
          {/* 정답 존 */}
          <TouchableWithoutFeedback onPress={() => onPress(index)}>
            <View
              style={{
                backgroundColor: '#006aff',
                borderBottomColor: '#428df5',
                borderBottomWidth: 1,
                width: '100%',
                padding: 20,
              }}
            >
              <Text style={{ color: 'white', fontSize: 14 }}>
                {index + 1}) {value.q}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          {/* 대답 존 */}
          {expanded === index && (
            <View
              style={{
                backgroundColor: '#f4f4f4',
                borderBottomColor: '#ddd',
                borderBottomWidth: 1,
                width: '100%',
                padding: 20,
                paddingLeft: 40,
              }}
            >
              <Text style={{ color: '#333' }}>{value.a}</Text>
            </View>
          )}
        </View>
      ))}
    </SafeAreaView>
  )
}
