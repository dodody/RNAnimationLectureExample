import React, { useState, useRef } from "react";
import { View, Text, Button, Dimensions, Animated } from "react-native";

const { width, height } = Dimensions.get("window");
export default function ViewLayoutEvent() {
  const [number, setNumber] = useState(0);
  const moveAnim = useRef(new Animated.Value(0)).current;
  console.log(width, height);

  const onPressButton = () => {
    setNumber((value) => value + 1);
    Animated.timing(moveAnim, {
      toValue: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View
      onLayout={(e) => console.log(e.nativeEvent)}
      style={{
        flex: 1,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View onLayout={(e) => console.log(e.nativeEvent)}>
        <Text style={{ width: 10 }}>{number}</Text>
        <Button title="update state" onPress={onPressButton} />
      </Animated.View>
    </View>
  );
}
