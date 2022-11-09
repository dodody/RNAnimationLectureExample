import React, { useRef } from "react";
import { Animated, View, Text, Dimensions, Button } from "react-native";

export default function AnimatedDecay() {
  // ! 차 타는거
  // 많이 쓰지는 않는것같은데, 확실하게 공던지기, 카드넘기기 등 속도가 있고, 그걸 줄여야할때 주로 쓰는것 같다.
  // 속도를 늦추기 위해 마찰을 주는 것으로, 손으로 이용한 액션에 자연스러움을 특히 줄수 있는 애니메이션이다.
  // 다들 겁을 먹고 이런 간단한 애니메이션에서 쓰임새가 없다고 그냥 기억에서 지워버리시는데
  // 우린 제스쳐를 이용한 다양한 애니메이션을 줄것이기 때문에,
  // 초기에 속도가 있어야 하고, ㅡㄱ때
  
  const windowWidth = Dimensions.get("window").width;
  const translateXAnim = useRef(new Animated.Value(-70)).current;
  const onCarPress = () => {
    Animated.decay(translateXAnim, {
      velocity: 2,
      deceleration: 0.995,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Button onPress={onCarPress} title="멈추세요 제발" />
      <Animated.View
        style={{
          transform: [{ translateX: translateXAnim }],
        }}
      >
        <Text style={{ fontSize: 60 }}>🚗</Text>
      </Animated.View>
    </>
  );
}
