import React, { useRef, useState } from "react";
import {
  View,
  Image,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  PanResponder,
} from "react-native";
import { faker } from "@faker-js/faker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { LOGO_HEADER_HEIGHT, CATEGORY_HEADER_HEIGHT } from "../utils";

import PlaylistActionBar from "./PlaylistActionBar";
import PlayListMiniButtons from "./PlayListMiniButtons";
import PlayListMiniTitle from "./PlayListMiniTitle";
//  ! 다양한 트리거가 있을 수 있지만, 우리는 dx값으로 트리거를 만들어 보겠다.

const { width, height } = Dimensions.get("window");
export default function PlayList() {
  const pageAnim = useRef(new Animated.Value(0)).current;
  const heightAnim = useRef(new Animated.Value(0)).current;
  const [play, setPlay] = useState(false);
  const [playListSize, setPlayListSize] = useState("small");
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderStart: (evt, gestureState) => {},
      onPanResponderMove: (evt, gestureState) => {
        // ! 위로 움직이는건 음수이기 때문에
        const dy = -gestureState.dy;
        // 위로 움직이는 애니메이션
        if (0 < dy && dy < height) {
          heightAnim.setValue(dy);
        }
        // 아래로 움직이는 애니메이션
        if (dy < 0 && -height < dy) {
          heightAnim.setValue(height + dy);
        }
      },
      onPanResponderEnd: (evt, gestureState) => {
        const dy = -gestureState.dy;
        // 0 혹은 100으로 가는 애니메이션
        console.log(height / 4, dy);
        if (height / 4 < dy) {
          Animated.spring(heightAnim, {
            toValue: height,
            friction: 7,
            tension: 40,
            useNativeDriver: false,
          }).start();
        }

        if (height / 4 > dy) {
          Animated.spring(heightAnim, {
            toValue: 0,
            friction: 7,
            tension: 40,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <View
      {...panResponder.panHandlers}
      style={{ borderWidth: 1, borderColor: "red" }}
    >
      <Animated.View
        style={[
          // playListSize === "small"
          //   ? { height: 60 }
          //   : {
          //       height: height,
          //       marginTop: -(LOGO_HEADER_HEIGHT + CATEGORY_HEADER_HEIGHT),
          //       paddingTop: getStatusBarHeight(),
          //     },
          {
            height: heightAnim.interpolate({
              inputRange: [0, height],
              outputRange: [60, height],
            }),
            marginTop: heightAnim.interpolate({
              inputRange: [0, height],
              outputRange: [0, -(LOGO_HEADER_HEIGHT + CATEGORY_HEADER_HEIGHT)],
            }),
            paddingTop: heightAnim.interpolate({
              inputRange: [0, height],
              outputRange: [0, getStatusBarHeight()],
            }),
            backgroundColor: "#222",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 10,
            borderWidth: 1,
          },
        ]}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: "https://picsum.photos/300" }}
            style={
              playListSize === "small"
                ? { width: 40, height: 40 }
                : {
                    width: width * 0.8,
                    height: width * 0.8,
                  }
            }
          />
          <PlayListMiniTitle />
        </View>
        <PlayListMiniButtons play={play} />
      </Animated.View>
      <PlaylistActionBar />
    </View>
  );
}
