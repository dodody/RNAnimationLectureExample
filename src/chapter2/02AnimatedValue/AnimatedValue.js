import React, { useRef, useEffect } from 'react'
import { Animated, Button, View } from 'react-native'
// someAnim.addListener(callback);
// someAnim.removeAllListener();
// someAnim.setValue();
// someAnim.stopAnimation();
// someAnim.resetAnimation();
// someAnim.setOffset();
// someAnim.flattenOffset();
// someAnim.extractOffset();

export default function AnimatedValue() {
  const translateXAnim = useRef(new Animated.Value(-100)).current
  const vectorAnim = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current

  useEffect(() => {
    return () => translateXAnim.removeAllListener()
  }, [])

  const onBtnPress = () => {
    translateXAnim.addListener(({ value }) => console.log(value))
    //
    translateXAnim.setValue(-100)
    translateXAnim.setOffset(120)
    translateXAnim.extractOffset()
    Animated.timing(translateXAnim, {
      toValue: 100,
      useNativeDriver: true,
    }).start()
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button title="움직여라!" onPress={onBtnPress} />
        <Animated.Text
          style={{
            fontSize: 50,
            transform: [{ translateX: translateXAnim }],
          }}
        >
          🍊
        </Animated.Text>
      </View>
    </>
  )
}
