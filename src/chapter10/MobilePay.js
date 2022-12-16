import React, { useRef } from "react";
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

export default function MobilePay() {
  const openCard = useRef(false);
  const positionAnim = useRef(new Animated.Value(0)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current; // 아무것도 안하는 애니메이션

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        console.log(gestureState.dy, openCard.current);
        const { dy } = gestureState;
        // 펼쳐지는 애니메이션
        if (0 < dy && dy < 80 && !openCard.current) {
          positionAnim.setValue(gestureState.dy);
        }
        // 닫히는 애니메이션
        if (-80 < dy && dy < 0 && openCard.current) {
          positionAnim.setValue(60 + gestureState.dy);
        }
        // 아무것도 안하는 애니메이션
        // 펼쳐있을때
        if (0 < dy && dy < 20 && openCard.current) {
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
        if (0 < dy && !openCard.current) {
          openCard.current = true;
          Animated.timing(positionAnim, {
            toValue: 60,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
        // 닫히는 애니메이션
        if (dy < 0 && openCard.current) {
          openCard.current = false;
          Animated.timing(positionAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }

        // 아무것도 안하는 애니메이션
        // 펼쳐있을때
        if (0 < dy && openCard.current) {
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

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View
        {...panResponder.panHandlers}
        style={{
          flex: 1,
          width: "100%",
          borderWidth: 1,
          borderColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: width * 0.7,
            height: width * 0.7 * 0.58 + 50,
            position: "relative",
            marginTop: -60,
          }}
        >
          {["#aaa", "#bbb", "#ccc", "#ddd", "#eee", "#f2f2f2"].map(
            (value, index) => {
              // 처음 조절
              const addValue = useRef(new Animated.Value(index * 20)).current;
              const marginTop = Animated.add(positionAnim, addValue);
              // 스크롤 위치 조절
              const multiplyValue = useRef(
                new Animated.Value(index - 3)
              ).current;
              const dody = Animated.multiply(positionAnim, multiplyValue);
              return (
                <View key={index}>
                  <TouchableWithoutFeedback onPress={() => console.log(123)}>
                    <Animated.View
                      style={{
                        position: "absolute",
                        marginTop,
                        transform: [
                          { translateY: dody },
                          {
                            rotateZ: rotateAnim.interpolate({
                              inputRange: [-20, 0, 20],
                              outputRange: ["-10deg", "0deg", "10deg"],
                            }),
                          },
                        ],
                        backgroundColor: value,
                        borderRadius: 10,
                        width: width * 0.7,
                        height: width * 0.7 * 0.58,
                        shadowOffset: {
                          width: -3,
                          height: -3,
                        },
                        shadowOpacity: 0.2,
                        shadowRadius: 10,
                      }}
                    />
                  </TouchableWithoutFeedback>
                </View>
              );
            }
          )}
        </View>
      </View>
    </View>
  );
}
