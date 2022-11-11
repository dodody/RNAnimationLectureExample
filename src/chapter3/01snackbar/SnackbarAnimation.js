import React, { useRef } from "react";
import {StyleSheet, Text, View, Animated, Button} from "react-native";
import Icon from "react-native-vector-icons/dist/AntDesign";
import { getBottomSpace } from 'react-native-iphone-x-helper'

export default function SnackbarAnimation() {
  const translateYAnim = useRef(new Animated.Value(100)).current;
  const onButtonPress = () => {
    translateYAnim.setValue(100);

    Animated.stagger(1500, [
      Animated.timing(translateYAnim, {
        toValue: 0, 
        duration: 300, 
        useNativeDriver: true, 
      }),
      Animated.timing(translateYAnim, {
        toValue: 100, 
        duration: 300, 
        useNativeDriver: true, 
      })
    ]).start()
  };

  return (
    <>
      <Button title="show snackbar" onPress={onButtonPress} />
      <Animated.View
        style={[
          styles.snackbarPosition,
          {
            transform: [{ translateY: translateYAnim }]
          }
        ]}>
        <View style={styles.snackbarBg}>
          <Icon name="exclamationcircle" size={20} color="white" />
          <Text style={styles.snackbarText}>저런, 뭔가 잘못된게 아닐까요?</Text>
        </View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  snackbarPosition: {
    width: "100%",
    position: "absolute",
    bottom: getBottomSpace() + 10, 
  },
  snackbarBg: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#222",
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  snackbarText: {
    fontSize: 14,
    color: "white",
    marginLeft: 10,
  },
});
