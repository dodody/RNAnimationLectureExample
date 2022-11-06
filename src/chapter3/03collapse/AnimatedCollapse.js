import React, {useRef} from 'react'
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback } from 'react-native'; 
import {data} from './data'

export default function AnimatedCollapse() {
  const collapseAnim = useRef(new Animated.Value(1)).current;
  const onPress = () => {
    Animated.timing(collapseAnim, {
      toValue: 0, 
      useNativeDriver: false, 
    }).start(); 
  }
  return (
    <View>
      {data.map((val, idx) => (
        <View key={idx}>
          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.qWrapper}>
              <Text style={{fontSize: 16}}>{val.q}</Text>
            </View>
          </TouchableWithoutFeedback>
          {/* // ! 여기서 막히네 */}
          <Animated.View style={[styles.aWrapper, {
            // height: 0, 
            borderWidth: 1, 
            // padding: 20, 
            transform: [{
              scaleY: collapseAnim

            }]
          }]}>
            <Text style={{color: '#333'}}>{val.a}</Text>
          </Animated.View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  qWrapper: {
    backgroundColor: '#ffa100', 
    padding: 20, 
  }, 
  aWrapper: {
    paddingHorizontal: 30, 
    borderBottomColor: '#f2f2f2', 
    borderBottomWidth: 1, 
  }
})