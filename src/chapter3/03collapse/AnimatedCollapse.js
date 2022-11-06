import React, {useRef, useState} from 'react'
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native'; 
import { data } from './data'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export default function AnimatedCollapse() {
  return (
    <View>
      {data.map((value, index) => {
        const opacityAnim = useRef(new Animated.Value(1)).current;
        const [isOpen, setIsOpen] = useState(false)
        // collapse의 열러있냐, 닫혀있냐 상태를 확인하기 위해서

        const onPress = (index) => {
          setIsOpen(value => !value)
          Animated.timing(opacityAnim, {
            toValue: isOpen ? 1 : 0,  
            duration: 200, 
            useNativeDriver: false, 
          }).start(); 
        }

        return (
          <View key={index}>
            <TouchableWithoutFeedback onPress={() => onPress(index)}>
              <View style={styles.qWrapper}>
                <Text style={{ fontSize: 16, flex: 1, color: 'white' }}>{value.q}</Text>
                <Animated.View style={{
                  paddingLeft: 10, 
                  transform: [
                    {
                      rotate: opacityAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['180deg', '0deg']
                      })
                    }, 
                    {
                      translateX: opacityAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-13, 0]
                      })
                    }, 
                  ]
                }}>
                  <Icon name="expand-more" size={26} color="white" />
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>

            <Animated.View
              style={[
                styles.aWrapper,
                {
                  opacity: opacityAnim.interpolate({
                    inputRange: [0, 1], 
                    outputRange: [1, 0],
                  }), 
                  height: opacityAnim.interpolate({
                    inputRange: [0, 1], 
                    outputRange: [100, 0],
                  }),
                  padding: opacityAnim.interpolate({
                    inputRange: [0, 1], 
                    outputRange: [10, 0],
                  }),
              },{
              }
            ]}>
              <Text style={{color: '#333'}}>{value.a}</Text>
            </Animated.View>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  qWrapper: {
    backgroundColor: '#0066eb', 
    padding: 20,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
  }, 
  aWrapper: {
    borderBottomColor: '#f2f2f2', 
    borderBottomWidth: 1, 
    marginHorizontal: 10, 
    justifyContent: 'center'
  }
})