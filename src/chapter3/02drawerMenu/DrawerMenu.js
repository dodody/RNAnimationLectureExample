import React, { useRef } from "react";
import { Animated, View, Text, Dimensions, TouchableHighlight, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";

export default function DrawerMenu() {
  const windowWidth = Dimensions.get("window").width; 
  const translateXAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const interpolateAnim = useRef(new Animated.Value(0)).current;

  const onCloseButtonPress = () => {
    translateXAnim.setValue(0);
    opacityAnim.setValue(1);
    
    Animated.timing(translateXAnim, {
      toValue: -windowWidth * 0.9 + 50,
      useNativeDriver: true,
    }).start(() => console.log(1));
    
    Animated.timing(opacityAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start(() => console.log(2));
    
    Animated.timing(interpolateAnim, {
      toValue: 1,
      duration: 2000, 
      useNativeDriver: true,
    }).start(() => console.log(123));
  }
  
  const interpolatedInterpolate = interpolateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['orange', 'purple']
  });

  return (
    <>
      <Animated.View style={[styles.wrapper, {
        backgroundColor: interpolatedInterpolate, 
        transform: [{translateX: translateXAnim}], 
      }]}>
        <View style={styles.menuContents} />
        <TouchableHighlight
          onPress={onCloseButtonPress}
          style={styles.menuCloseButton}
          underlayColor="#f0f0f0"
          >
          <Icon name="clear" size={30} color="#333" />
        </TouchableHighlight>
      </Animated.View>
      <Animated.View style={[styles.menuBackground, {
        opacity: opacityAnim
      }]}>
        <Text>배경</Text>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 1, 
    flexDirection: "row", 
    position: "absolute", 
    justifyContent: "space-between", 
    top: 0, 
    left: 0, 
    width: "90%", 
    height: "100%", 
    paddingLeft: 20, 
    paddingRight: 5,
    paddingBottom: getBottomSpace() + 20, 
    paddingTop: getStatusBarHeight() + 20, 
  }, 
  menuContents: {
    backgroundColor: "#f2f2f2",
    flex: 1, 
  },
  menuCloseButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100, 
    marginLeft: 5,
  }, 
  menuBackground: {
    position: "absolute", 
    width: "100%", 
    height: "100%", 
    backgroundColor: "#00000080", 
    zIndex: 0, 
  }
})