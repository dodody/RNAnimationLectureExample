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
import { faker } from "@faker-js/faker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import {
  LOGO_HEADER_HEIGHT,
  CATEGORY_HEADER_HEIGHT,
  BOTTOM_HEIGHT,
} from "../utils";

import PlayListImage from "./PlayListImage";
import PlayListActionBar from "./PlayListActionBar";
import PlayListMini from "./PlayListMini/PlayListMini";
import PlayListFull from "./PlayListFull/PlayListFull";
import usePlayList from "./PlayList.hooks";
import Bottom from "./HomeBottom/Bottom";
//  ! 다양한 트리거가 있을 수 있지만, 우리는 dx값으로 트리거를 만들어 보겠다.

const { width, height } = Dimensions.get("window");
export default function PlayList({ play, setPlay }) {
  const { panResponder, heightAnim, typeRef } = usePlayList({ play, setPlay });
  const pageAnim = useRef(new Animated.Value(0)).current;

  return (
    <>
      <View {...panResponder.panHandlers}>
        <Animated.View
          style={[
            {
              height: heightAnim.interpolate({
                inputRange: [0, height],
                outputRange: [60, height + 50 + getBottomSpace()],
              }),
              marginTop: heightAnim.interpolate({
                inputRange: [0, height],
                outputRange: [
                  0,
                  -(LOGO_HEADER_HEIGHT + CATEGORY_HEADER_HEIGHT),
                ],
              }),
              paddingTop: heightAnim.interpolate({
                inputRange: [0, height],
                outputRange: [0, getStatusBarHeight()],
              }),
              backgroundColor: "#222",
              flexDirection: "row",
              justifyContent: "space-between",
              // playlist 내리는 로직
              marginBottom: heightAnim.interpolate({
                inputRange: [-100, 0, height],
                outputRange: [
                  -100,
                  0,
                  -(LOGO_HEADER_HEIGHT + CATEGORY_HEADER_HEIGHT),
                ],
              }),
            },
          ]}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <PlayListImage heightAnim={heightAnim} />
            <PlayListFull
              heightAnim={heightAnim}
              play={play}
              setPlay={setPlay}
            />
            <PlayListMini
              heightAnim={heightAnim}
              play={play}
              setPlay={setPlay}
            />
            {/* play, setPlay */}
            <PlayListActionBar heightAnim={heightAnim} />
          </View>
        </Animated.View>
      </View>
      <Bottom heightAnim={heightAnim} />
    </>
  );
}
