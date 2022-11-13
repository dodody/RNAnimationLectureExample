import React, { useRef } from "react";
import {
  Animated,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/dist/MaterialIcons";

export default function DrawerMenu() {
  const leftAnim = useRef(new Animated.Value(0)).current;
  const width = Dimensions.get("window").width;

  const onOpenButtonPress = () => {
    Animated.timing(leftAnim, {
      toValue: 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const onCloseButtonPress = () => {
    Animated.timing(leftAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#aff100" }}>
      {/* DEFAULT */}
      <SafeAreaView style={{ alignItems: "flex-end", zIndex: 1 }}>
        <TouchableWithoutFeedback
          onPress={onOpenButtonPress}
          style={{
            width: 44,
            height: 44,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            marginLeft: 5,
          }}
        >
          <View style={{ padding: 10 }}>
            <Icon name="menu" size={30} color="#222" />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>

      {/* MENU */}
      <Animated.View
        style={{
          position: "absolute",
          borderWidth: 1,
          zIndex: 3,
          top: 0,
          left: 0,
          width: "90%",
          height: "100%",
          paddingLeft: 20,
          paddingRight: 5,
          paddingBottom: 20,
          paddingTop: 20,
          backgroundColor: leftAnim.interpolate({
            inputRange: [0, 100],
            outputRange: ["#ffffff00", "#ffffff"],
          }),
          transform: [
            {
              translateX: leftAnim.interpolate({
                inputRange: [0, 100],
                outputRange: [-width * 0.9, 0],
              }),
            },
          ],
        }}
      >
        <SafeAreaView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={{ padding: 10, fontSize: 22 }}>MENU ITEM</Text>
            <Text style={{ padding: 10, fontSize: 22 }}>MENU ITEM</Text>
            <Text style={{ padding: 10, fontSize: 22 }}>MENU ITEM</Text>
          </View>
          <TouchableHighlight
            onPress={onCloseButtonPress}
            style={{
              width: 44,
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
              marginLeft: 5,
            }}
            underlayColor="#f0f0f0"
          >
            <Icon name="clear" size={30} color="#333" />
          </TouchableHighlight>
        </SafeAreaView>
      </Animated.View>

      {/* MENU BACKGROUND */}
      <TouchableWithoutFeedback onPress={onCloseButtonPress}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
            backgroundColor: leftAnim.interpolate({
              inputRange: [0, 100],
              outputRange: ["#00000000", "#00000080"],
            }),
            zIndex: leftAnim.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 2],
            }),
          }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
