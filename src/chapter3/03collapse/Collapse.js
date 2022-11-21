import React, { useRef } from 'react'
import {
  Animated,
  Text,
  View,
  TouchableWithoutFeedback,
  Easing,
  SafeAreaView,
} from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import { data } from '../../../utils/data'

export default function Collapse() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {data.map((value, index) => {
        const interpolateAnim = useRef(new Animated.Value(0)).current
        let isOpened = false

        const onOpenPress = () => {
          Animated.timing(interpolateAnim, {
            toValue: isOpened ? 0 : 1,
            duration: 200,
            useNativeDriver: false,
          }).start(() => (isOpened = !isOpened))
        }

        return (
          <View key={index} style={{ width: '100%' }}>
            {/*  */}
            <TouchableWithoutFeedback onPress={onOpenPress}>
              <View
                style={{
                  backgroundColor: '#4c5ced',
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}
              >
                <Text
                  style={{
                    color: 'yellow',
                    fontWeight: 'bold',
                    fontSize: 16,
                    flexShrink: 1,
                  }}
                >
                  {value.q}
                </Text>
                <Animated.View
                  style={{
                    flexShrink: 1,
                    marginLeft: 10,
                    transform: [
                      {
                        rotate: interpolateAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '180deg'],
                        }),
                      },
                    ],
                  }}
                >
                  <Icon name="expand-more" size={24} color="yellow" />
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>
            {/*  */}
            <Animated.View
              style={{
                paddingHorizontal: 40,
                height: interpolateAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
                justifyContent: 'center',
                borderBottomColor: '#4c5ced',
                borderBottomWidth: 0.5,
              }}
            >
              <Text style={{ fontSize: 14 }}>{value.a}</Text>
            </Animated.View>
          </View>
        )
      })}
    </SafeAreaView>
  )
}
