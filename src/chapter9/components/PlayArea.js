import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  PanResponder,
  Animated,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default function PlayArea({ BOTTOM_HEIGHT }) {
  const [play, setPlay] = useState(false);
  const onPressPlayIcon = () => {
    setPlay((value) => !value);
  };
  const panAnim = useRef(new Animated.Value(0)).current;
  const { height } = Dimensions.get("window");
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        console.log(gestureState);
        if (gestureState.dy < 0) {
          panAnim.setValue(0 - gestureState.dy);
        } else {
          panAnim.setValue(height - gestureState.dy);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        // 만약, 일정 부분을 넘었으면,
        if (gestureState.dy < -100) {
          Animated.timing(panAnim, {
            toValue: height,
            useNativeDriver: false,
          }).start();
        } else {
          Animated.timing(panAnim, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        position: "absolute",
        bottom: panAnim.interpolate({
          inputRange: [0, 1000],
          outputRange: [BOTTOM_HEIGHT, 0],
        }),
        width: "100%",
        backgroundColor: "#222",
        justifyContent: "space-between",
        flexDirection: "row",
        borderBottomColor: "#666",
        borderBottomWidth: 1,
        alignItems: "center",
        height: panAnim.interpolate({
          inputRange: [0, 1000],
          outputRange: [60, 1000],
        }),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 10,
        }}
      >
        <View style={{ padding: 8 }}>
          <Image
            source={{ uri: "https://picsum.photos/40" }}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 8,
          }}
        >
          <Text style={{ fontSize: 12, color: "white", fontWeight: "bold" }}>
            0301
          </Text>
          <Text style={{ fontSize: 12, color: "white" }}>dody</Text>
        </View>
      </View>
      {/*  */}
      <View style={{ flexDirection: "row" }}>
        <TouchableHighlight
          underlayColor={"#ffffff10"}
          style={{ borderRadius: 100 }}
          onPress={onPressPlayIcon}
        >
          {play ? (
            <View
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon
                // controller-paus
                name="controller-play"
                size={26}
                color="white"
              />
            </View>
          ) : (
            <View
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="controller-paus" size={26} color="white" />
            </View>
          )}
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#ffffff10"}
          style={{ borderRadius: 100 }}
          onPress={() => console.log(1)}
        >
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="controller-next" size={26} color="white" />
          </View>
        </TouchableHighlight>
      </View>
    </Animated.View>
  );
}
