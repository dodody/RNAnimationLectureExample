import React from "react";
import { View, Dimensions, Animated, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
const { height, width } = Dimensions.get("window");

// anim 1) 위로 올라가는 애니메이션
// anim 2) 점점 짙어지는 애니메이션
export default function HeaderBackground({ focus, headerBgAnim }) {
  return (
    <View>
      {/* 배경 */}
      <Animated.View
        style={{
          width: "100%",
          height: 300,
          position: "absolute",
          top: headerBgAnim.interpolate({
            inputRange: [0, 40],
            outputRange: [0, -20], // 올라가는게 티가 나게
          }),
        }}
      >
        {focus === undefined ? (
          <DefaultBackground />
        ) : (
          <ImageBackground focus={focus} />
        )}
        {/* 배경 그라데이션 더 짙게  */}
        <Animated.View
          style={{
            width: "100%",
            height: 300,
            position: "absolute",
            // header에 맞춰서 페이드아웃 되는 것처럼 보이게 하려고
            backgroundColor: headerBgAnim.interpolate({
              inputRange: [0, 100],
              outputRange: ["#11111110", "#111"],
            }),
          }}
        />
      </Animated.View>
    </View>
  );
}

function DefaultBackground() {
  return (
    <>
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: width + 500,
          marginTop: -300,
        }}
      >
        <LinearGradient
          start={{ x: 1, y: 0.1 }}
          end={{ x: 0.5, y: 1 }}
          locations={[0, 0.6, 0.8, 1]}
          colors={["#FFFFFF00", "#ffa10030", "#0e734040", "#11111100"]}
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: 600,
          }}
        />
      </View>
    </>
  );
}

function ImageBackground({ focus }) {
  return (
    <>
      <Image
        source={{ uri: `https://picsum.photos/30${focus}` }}
        style={{ width: "100%", height: 300, position: "absolute" }}
      />
      <LinearGradient
        start={{ x: 0.5, y: 0.1 }}
        end={{ x: 0.5, y: 1 }}
        colors={["#11111100", "#111"]}
        style={{
          position: "absolute",
          width: "100%",
          height: 300,
        }}
      />
    </>
  );
}
