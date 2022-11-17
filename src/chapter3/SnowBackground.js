import React, { useRef, useEffect } from 'react'
import { View, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'

export default function SnowBackground() {
  return (
    <View
      style={{
        backgroundColor: '#121733',
        flex: 1,
        flexDirection: 'row',
      }}
    >
      {[...Array(100)].map((value, index) => {
<<<<<<< Updated upstream
        const interpolateAnim = useRef(new Animated.Value(0)).current
=======
        const interpolateAnim = useRef(new Animated.Value(0)).current;
>>>>>>> Stashed changes
        useEffect(() => {
          Animated.loop(
            Animated.timing(interpolateAnim, {
              toValue: 1,
<<<<<<< Updated upstream
              delay: index * 100,
=======
              delay: index * 200,
>>>>>>> Stashed changes
              duration: 5000,
              useNativeDriver: false,
            }),
          ).start()
        }, [])

        return (
          <Animated.View
            key={index}
            style={{
              position: 'absolute',
              top: interpolateAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['-10%', '110%'],
              }),
              left: `${Math.floor(Math.random() * 100)}%`,
            }}
          >
            <Icon name="snowflake-2" color="white" size={14} />
          </Animated.View>
        )
      })}
    </View>
  )
}
