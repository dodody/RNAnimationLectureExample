import React, { cloneElement, useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  PanResponder,
} from "react-native";
const { width, height } = Dimensions.get("window");

import {
  LOGO_HEADER_HEIGHT,
  CATEGORY_HEADER_HEIGHT,
  BOTTOM_HEIGHT,
} from "../utils";

export default function usePlayList({ play, setPlay, heightAnim }) {
  const typeRef = useRef("mini");
  const [onMoveShouldSetPanResponder, setonMoveShouldSetPanResponder] =
    useState(true);

  const handleStopAnimation = () => {
    setonMoveShouldSetPanResponder(true);
    setTimeout(() => {
      setonMoveShouldSetPanResponder(false);
    }, 4);
  };

  const panResponder = PanResponder.create({
    // onMoveShouldSetPanResponder: (evt, gestureState) => {
    //   //return true if user is swiping, return false if it's a single click
    //   // gestureState.dy, gestureState.dx 가 -2s
    //   const returnValue =
    //     gestureState.dy < -2 ||
    //     gestureState.dy > 2 ||
    //     gestureState.dx < -2 ||
    //     gestureState.dx > 2;
    //   console.log(1111, returnValue);
    //   return returnValue;
    // },

    onPanResponderMove: (evt, gestureState) => {
      // ! 위로 움직이는건 음수이기 때문에
      const dy = -gestureState.dy;
      // console.log(gestureState.y0, height);
      // 위로 움직이는 애니메이션
      if (0 < dy && dy < height) {
        heightAnim.setValue(dy);
      }

      // 아래로 움직이는 애니메이션
      if (dy < 0 && -height < dy) {
        if (typeRef.current === "mini") {
          heightAnim.setValue(dy);
          console.log(dy);
        }
        if (typeRef.current === "full") {
          heightAnim.setValue(height + dy);
        }
      }
    },

    onPanResponderEnd: (evt, gestureState) => {
      const dy = -gestureState.dy;
      // mini 일때 full로 가는 로직
      if (height / 6 < dy && typeRef.current === "mini") {
        console.log(1);
        Animated.spring(heightAnim, {
          toValue: height,
          friction: 7,
          tension: 40,
          useNativeDriver: false,
        }).start();
        typeRef.current = "full";
      }

      // mini 일때 제자리로 오는 로직
      if (0 < dy && height / 6 > dy && typeRef.current === "mini") {
        console.log(2);
        Animated.spring(heightAnim, {
          toValue: 0,
          friction: 7,
          tension: 40,
          useNativeDriver: false,
        }).start();

        typeRef.current = "mini";
      }

      // mini 일때 empty로 가는 로직
      if (dy < 0 && typeRef.current === "mini") {
        console.log(5);
        Animated.timing(heightAnim, {
          toValue: -100,
          duration: 300,
          useNativeDriver: false,
        }).start();
        typeRef.current = "mini";
      }

      //  ! 여기서 y 값에 따라 아예 닫아버리는 애니메이션도 추가해야 한다.
      //  위에서 아래로 오는
      if (dy < 0 && dy < -height / 6 && typeRef.current === "full") {
        console.log(3);
        Animated.spring(heightAnim, {
          toValue: 0,
          friction: 7,
          tension: 40,
          useNativeDriver: false,
        }).start();
        typeRef.current = "mini";
      }
      if (dy < 0 && dy > -height / 6 && typeRef.current === "full") {
        console.log(4);
        Animated.spring(heightAnim, {
          toValue: height,
          friction: 7,
          tension: 40,
          useNativeDriver: false,
        }).start();
        typeRef.current = "full";
      }
    },
  });

  return { panResponder, heightAnim, typeRef, handleStopAnimation };
}
