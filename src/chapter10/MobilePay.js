import React, { useRef } from "react";
import { View, Dimensions, PanResponder, Animated } from "react-native";
import Card from "./components/Card";

const { width, height } = Dimensions.get("window");

export default function MobilePay() {
  const openCard = useRef(false);
  const positionAnim = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        console.log(gestureState.dy, openCard.current);
        positionAnim.setValue(gestureState.dy);
        if (gestureState.dy > 100 && !openCard.current) {
          openCard.current = true;
          console.log("카드가 펼쳐진다.");
        }
      },
    })
  ).current;
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View
        {...panResponder.panHandlers}
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: 300,
          borderWidth: 1,
          borderColor: "red",
        }}
      >
        {["red", "blue", "green", "yellow", "orange", "gray"].map(
          (value, index) => {
            const INDEX = index - 2;
            return (
              <Animated.View
                style={{
                  position: "absolute",
                  marginTop: 10 * index,
                  // transform: [{ translateY: positionAnim }],
                  backgroundColor: value,
                  borderRadius: 14,
                  width: "70%",
                  height: width * 0.7 * 0.58,
                }}
              />
            );
          }
        )}
      </View>
    </View>
  );
}
