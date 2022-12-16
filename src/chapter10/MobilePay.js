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

export default function MobilePay() {
  const [focus, setFocus] = useState(5);
  const [grab, setGrab] = useState(false);
  // y 축으로 옮기는 애니메이션
  const openCard = useRef(false);
  // x축 늘리기
  const positionAnim = useRef(new Animated.Value(0)).current;
  // 아무것도 안하는 애니메이션
  const rotateAnim = useRef(new Animated.Value(0)).current;
  // ! 애니메이션이 각각 값을 가지고 있어야 한다.
  // x, y 각각 애니메이션을 가지고 있으면 컨트롤이 더 쉬웠을깡?
  // 필요하다. 왜냐하면, 세번째 애니메이션에서는 y값이 컨트롤 되어야 하기 때문이지

  const card = [
    { color: "#aaa", anim: useRef(new Animated.Value(0)).current },
    { color: "#bbb", anim: useRef(new Animated.Value(0)).current },
    { color: "#ccc", anim: useRef(new Animated.Value(0)).current },
    { color: "#ddd", anim: useRef(new Animated.Value(0)).current },
    { color: "#eee", anim: useRef(new Animated.Value(0)).current },
    { color: "#f2f2f2", anim: useRef(new Animated.Value(0)).current },
  ];
  const focusRef = useRef(false);

  const panResponder =
    grab &&
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponder: () => true,
      onPanResponderStart: (evt, gestureState) => {
        focusRef.current = true;
      },
      onPanResponderMove: (evt, gestureState) => {
        const { dy, dx } = gestureState;
        // ! dy, dx가 뭐가 더 큰지 보고 애니메이션의 역할을 명확하게
        const XSlider = Math.abs(dy) < Math.abs(dx);
        const YSlider = Math.abs(dx) < Math.abs(dy);

        // x축으로 움직이는 슬라이더
        if (XSlider) {
          // 카드 내보내기
          if (dx < -5 && !openCard.current && 0 <= focus) {
            console.log(1, focus);
            card[focus].anim.setValue(dx);
          }

          // 보내진 카드 데려오기
          if (5 < dx && !openCard.current && focus <= 5) {
            console.log(2, focus);
          }
        }

        // y축으로 움직이는 슬라이더
        if (YSlider) {
          // 펼쳐지는 애니메이션
          if (5 < dy && dy < 80 && !openCard.current) {
            positionAnim.setValue(gestureState.dy);
          }
          // 닫히는 애니메이션
          if (-80 < dy && dy < 0 && openCard.current) {
            positionAnim.setValue(60 + gestureState.dy);
          }
          // 아무것도 안하는 애니메이션
          if (5 < dy && dy < 20 && openCard.current) {
            rotateAnim.setValue(dy);
          }
        }
      },

      onPanResponderEnd: (evt, gestureState) => {
        const { dy, dx } = gestureState;
        // !왼쪽으로 움직이는 애니메이션
        // ! dy, dx가 뭐가 더 큰지 보고 애니메이션의 역할을 명확하게
        const XSlider = Math.abs(dy) < Math.abs(dx);
        const YSlider = Math.abs(dx) < Math.abs(dy);

        // x축으로 움직이는 슬라이더
        if (XSlider) {
          // 카드 내보내기
          if (dx < -5 && !openCard.current && 0 <= focus) {
            Animated.timing(card[focus].anim, {
              toValue: -500,
              duration: 300,
              useNativeDriver: false,
            }).start(({ finished }) => {
              if (finished) {
                setFocus((el) => el - 1);
                if (focus === 5) {
                  // ! 카드가 옮겨졌습니다~!
                }
              }
            });
          }

          // 보내진 카드 데려오기
          if (5 < dx && !openCard.current && focus < 5) {
            Animated.timing(card[focus + 1].anim, {
              toValue: 0,
              duration: 300,
              useNativeDriver: false,
            }).start(({ finished }) => {
              if (finished) {
                console.log(focus);
                setFocus((el) => el + 1);
              }
            });
          }
        }

        // y축으로 움직이는 슬라이더
        if (YSlider) {
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
        }

        // 옆으로 가는 애니메이션

        // // 닫혀있을때
        // if (dy < 0 && !openCard.current) {
        //   Animated.timing(rotateAnim, {
        //     toValue: 0,
        //     duration: 300,
        //     useNativeDriver: false,
        //   }).start();
        // }
      },
    });

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View
        {...panResponder.panHandlers}
        style={{
          flex: 1,
          width: "100%",
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
          {card.map((value, index) => {
            // 처음 조절
            const addValue = useRef(new Animated.Value(index * 20)).current;
            const marginTop = Animated.add(positionAnim, addValue);
            // 스크롤 위치 조절
            const multiplyValue = useRef(new Animated.Value(index - 3)).current;
            const dody = Animated.multiply(positionAnim, multiplyValue);

            return (
              <View key={index}>
                <TouchableWithoutFeedback
                  onPressIn={() => {
                    setGrab(true);
                    console.log(123123, index);
                  }}
                >
                  <Animated.View
                    style={{
                      position: "absolute",
                      marginTop,
                      transform: [
                        { translateY: dody },
                        { translateX: value.anim },
                        {
                          rotateZ: rotateAnim.interpolate({
                            inputRange: [-20, 0, 20],
                            outputRange: ["-10deg", "0deg", "10deg"],
                          }),
                        },
                      ],
                      backgroundColor: value.color,
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
          })}
        </View>
      </View>
    </View>
  );
}
