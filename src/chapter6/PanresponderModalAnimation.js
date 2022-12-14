import React, { useRef, useState } from 'react'
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableWithoutFeedback,
  Animated,
  Easing,
  PanResponder,
} from 'react-native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import Icon from 'react-native-vector-icons/AntDesign'

export default function PanresponderModalAnimation() {
  const interpolateAnim = useRef(new Animated.Value(0)).current
  const [open, setOpen] = useState(false)

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      if (gestureState.dy > 120) {
        hideModal()
      }
    },
  })

  const openModal = () => {
    Animated.timing(interpolateAnim, {
      toValue: 1,
      duration: 400,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start()
    setOpen(true)
  }

  const hideModal = () => {
    Animated.timing(interpolateAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        setOpen(false)
      }
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="menu modal open" onPress={openModal} />
      {open && (
        <TouchableWithoutFeedback onPress={hideModal}>
          <Animated.View
            style={{
              position: 'absolute',
              backgroundColor: '#00000080',
              height: '130%',
              width: '100%',
              opacity: interpolateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            }}
          />
        </TouchableWithoutFeedback>
      )}

      <Animated.View
        {...panResponder.panHandlers}
        style={{
          position: 'absolute',
          bottom: interpolateAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [-500, 0],
          }),
          width: '100%',
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          padding: 20,
          paddingBottom: 20 + getBottomSpace(),
          backgroundColor: 'white',
        }}
      >
        <ListItem icon="pushpino" text="????????????" onPress={hideModal} />
        <ListItem icon="hearto" text="?????????" onPress={hideModal} />
        <ListItem icon="delete" text="????????????" onPress={hideModal} />
        <ListItem icon="back" text="??????" color="#999" onPress={hideModal} />
      </Animated.View>
    </SafeAreaView>
  )
}

function ListItem({ icon, text, color = '#333', onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: "space-between",
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2',
          height: 60,
          paddingHorizontal: 10,
        }}
      >
        <Icon name={icon} size={20} color={color} />
        <Text style={{ color, fontSize: 15, marginLeft: 20 }}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
