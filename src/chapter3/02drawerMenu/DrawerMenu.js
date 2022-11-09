import React, { useRef } from "react";
import { Animated, View, Text, Dimensions, TouchableHighlight, StyleSheet, Button, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import Icon from "react-native-vector-icons/dist/MaterialIcons";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";

export default function DrawerMenu() {
  const windowWidth = Dimensions.get("window").width; 
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const isOpen = useRef(false);

  const onCloseButtonPress = () => {
    Animated.timing(opacityAnim, {
      toValue: isOpen.current === false ? 0 : 1,
      useNativeDriver: false,
    }).start(() => {
      isOpen.current = !isOpen.current
    });
  }

  return (
    <>
      {/* 메뉴 */}
      <Animated.View style={[styles.wrapper, {
        backgroundColor: opacityAnim.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: ["#ffffff00", "#ffffff", "#ffffff"]
        }),
        transform: [
          {
            translateX: opacityAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [-windowWidth*0.9, 0]
            }),
          }
        ], 
      }]}>
        <View style={{flexDirection: "column"}}>
          <Text style={{padding: 10}}>menu items</Text>
          <Text style={{padding: 10}}>menu items</Text>
          <Text style={{padding: 10}}>menu items</Text>
        </View>
        <TouchableHighlight
          onPress={onCloseButtonPress}
          style={styles.menuCloseButton}
          underlayColor="#f0f0f0"
          >
          <Icon name="clear" size={30} color="#333" />
        </TouchableHighlight>
      </Animated.View>

      <Animated.View style={[styles.menuBackground, {
        opacity: opacityAnim, 
      }]} />

      {/* 메뉴 밖의 상황 */}
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback
          onPress={onCloseButtonPress}
          style={styles.menuCloseButton}
        >
          <View style={{padding: 10}}>
            <Icon name="menu" size={30} color="#333" />
          </View>
        </TouchableWithoutFeedback>
        <Button title="dody" onPress={() => console.log(1)} />
      </SafeAreaView>
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
    top: 0, 
    width: "100%", 
    height: "100%", 
    backgroundColor: "#00000080", 
    zIndex: 0, 
  }
})