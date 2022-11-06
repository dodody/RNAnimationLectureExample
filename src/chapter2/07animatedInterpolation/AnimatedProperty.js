import React, {useRef} from 'react'
import { Text, View, Animated, Button } from 'react-native'

export default function AnimatedProperty() {
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const onButtonPress = () => {
    opacityAnim.setValue(0);
    Animated.timing(opacityAnim, {
      toValue: 1,
      useNativeDriver: false
    }).start();
  }

  return (
    <>
      <Button title="속성 테스트 중" onPress={onButtonPress} />
      <View>
        <Animated.View style={{
          opacity: opacityAnim
        }}>
          <Text style={{fontSize: 50}}>🍊</Text>
        </Animated.View>

        <Animated.View style={{
          transform: [{
            translateX: opacityAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-100, 100]
            })
          }]
        }}>
          <Text style={{fontSize: 50}}>🍊</Text>
        </Animated.View>
        <Animated.View style={{
          transform: [{
            translateY: opacityAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-100, 100]
            })
          }]
        }}>
          <Text style={{fontSize: 50}}>🍊</Text>
        </Animated.View>
        <Animated.View style={{
          transform: [{
            scale: opacityAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 3]
            })
          }]
        }}>
          <Text style={{fontSize: 50}}>🍊</Text>
        </Animated.View>

        <Animated.View style={{
          backgroundColor: 'red',
          width: 100, 
          height: opacityAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 100]
          })
        }} />

        <Animated.View style={{
          backgroundColor: 'yellow',
          position: 'absolute',
          width: 10, 
          height: 100,
          top: opacityAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 100]
          })
        }} />

        <Animated.View style={{
          transform: [{
            rotate: opacityAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["0deg", "145deg"]
            })
          }]
        }}>
          <Text style={{fontSize: 50}}>🍊</Text>
        </Animated.View>

        <Animated.View style={{
          backgroundColor: opacityAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["#333", "#fff"]
          })
        }}>
          <Text style={{fontSize: 50}}>🍊</Text>
        </Animated.View>
        <Animated.Text style={{fontSize: 50, color: opacityAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ["#333", "#fff"]
          })
        }}>
          hello dody
        </Animated.Text>
      </View>
    </>
  )
}
