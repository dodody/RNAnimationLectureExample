import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  View,
  Text,
  SafeAreaView,
  PanResponder,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
const BANNER_HEIGHT = 200;
const WIDTH = Dimensions.get("window").width;

export default function PanresponderBannerSlider() {
  const pendingRef = useRef(true);
  const bannerAnim = useRef(new Animated.Value(0)).current;
  const [focused, setFocused] = useState(0);
  let focusedRef = 0;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      const onRight = gestureState.dx < -80;
      const onLeft = gestureState.dx > 80;

      if (onRight && focused < 3 && pendingRef.current) {
        pendingRef.current = false;
        setFocused((value) => value + 1);
        focusedRef = focusedRef + 1;
        Animated.timing(bannerAnim, {
          toValue: -(focused + 1) * WIDTH,
          duration: 400,
          useNativeDriver: false,
        }).start(({ finished }) => {
          if (finished) {
            pendingRef.current = true;
          }
        });
      }
      if (onLeft && 0 < focused && pendingRef.current) {
        pendingRef.current = false;
        setFocused((value) => value - 1);
        focusedRef = focusedRef - 1;
        Animated.timing(bannerAnim, {
          toValue: -(focused - 1) * WIDTH,
          duration: 400,
          useNativeDriver: false,
        }).start(({ finished }) => {
          if (finished) {
            pendingRef.current = true;
          }
        });
      }
    },
  });

  const onButtonPress = (index) => {
    clearInterval(intervalSlider);
    if (index > 3) {
      setFocused(0);
    } else {
      setFocused(index);
      focusedRef = index;
      Animated.timing(bannerAnim, {
        toValue: -index * WIDTH,
        duration: 400,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          transform: [{ translateX: bannerAnim }],
        }}
      >
        <View
          style={{
            position: "absolute",
            left: 0,
            width: 3 * WIDTH,
            flexDirection: "row",
          }}
        >
          {[...Array(4)].map((value, index) => {
            return (
              <View
                key={index}
                style={{
                  height: WIDTH,
                  width: WIDTH,
                  backgroundColor: "#222",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 50, color: "#ffffff30", fontWeight: 100 }}
                >
                  {index}
                </Text>
              </View>
            );
          })}
        </View>
      </Animated.View>
      <Buttons onButtonPress={onButtonPress} focused={focused} />
    </SafeAreaView>
  );
}

function Buttons({ onButtonPress, focused }) {
  return (
    <View
      style={{
        marginTop: WIDTH + 10,
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      {[...Array(4)].map((value, index) => {
        return (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => onButtonPress(index)}
          >
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: focused === index ? "#222" : "#ddd",
                borderRadius: 15,
                marginHorizontal: 6,
              }}
            />
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}
