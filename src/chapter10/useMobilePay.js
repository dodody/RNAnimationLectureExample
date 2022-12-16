import React, { useRef, useState } from "react";
import {
  View,
  Dimensions,
  PanResponder,
  Animated,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import Card from "./components/Card";
const { width, height } = Dimensions.get("window");

export default function useMobilePay() {
  const openCard = useRef(false);
  const [grab, setGrab] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current; // 아무것도 안하는 애니메이션
  const positionAnim = useRef(new Animated.Value(0)).current;
  const leftSlideAnim = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    grab
      ? PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onStartShouldSetPanResponder: () => true,
          onPanResponderMove: (evt, gestureState) => {
            const { dy, dx } = gestureState;
            console.log(111, gestureState.dy); // ? 옆으로 가는 애니메이션
            if (5 < dx && dx < 80 && !openCard.current) {
              leftSlideAnim.setValue(gestureState.dx);
            }
          },

          onPanResponderEnd: (evt, gestureState) => {
            const { dy } = gestureState;
          },
        })
      : PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onStartShouldSetPanResponder: () => true,
          onPanResponderMove: (evt, gestureState) => {
            console.log(gestureState.dy, openCard.current, grab);
            const { dy, dx } = gestureState;
            // 펼쳐지는 애니메이션
            if (5 < dy && dy < 80 && !openCard.current) {
              positionAnim.setValue(gestureState.dy);
            }

            // 닫히는 애니메이션
            if (-80 < dy && dy < 0 && openCard.current) {
              positionAnim.setValue(60 + gestureState.dy);
            }
            // 아무것도 안하는 애니메이션
            // 펼쳐있을때
            if (5 < dy && dy < 20 && openCard.current) {
              rotateAnim.setValue(dy);
            }
            // // 닫혀있을때
            // if (-20 < dy && dy < 0 && !openCard.current) {
            //   rotateAnim.setValue(dy);
            // }
          },

          onPanResponderEnd: (evt, gestureState) => {
            const { dy } = gestureState;
            // 펼쳐지는 애니메이션
            if (5 < dy && !openCard.current) {
              openCard.current = true;
              Animated.timing(positionAnim, {
                toValue: 60,
                duration: 300,
                useNativeDriver: false,
              }).start();
            }
            // 닫히는 애니메이션
            if (dy < -5 && openCard.current) {
              openCard.current = false;
              Animated.timing(positionAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
              }).start();
            }

            // 아무것도 안하는 애니메이션
            // 펼쳐있을때
            if (5 < dy && openCard.current) {
              Animated.timing(rotateAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
              }).start();
            }
            // // 닫혀있을때
            // if (dy < 0 && !openCard.current) {
            //   Animated.timing(rotateAnim, {
            //     toValue: 0,
            //     duration: 300,
            //     useNativeDriver: false,
            //   }).start();
            // }
          },
        })
  ).current;

  return {
    panResponder,
    openCard,
    grab,
    setGrab,
    rotateAnim,
    positionAnim,
    leftSlideAnim,
  };
}
