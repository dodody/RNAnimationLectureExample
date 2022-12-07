// ! 스크롤 관련 애니메이션은 여기에 넣어두기
import React, { useRef, useState } from "react";
import { Animated, Dimensions } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

const { height, width } = Dimensions.get("window");
const HEADER_HEIGHT = 40;
const BOTTOM_HEIGHT = 40 + getBottomSpace();

export default function useYoutubeMusicScroll() {
  const showenHeader = useRef(true);
  const beginDragRef = useRef(0); // 드래그 시작한 시점
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const scrollValueAnim = useRef(new Animated.Value(0)).current;

  const backgroundAnimPending = useRef(true).current;
  const backgroundAnim = useRef(new Animated.Value(0)).current;
  // 스크롤 값에 따른 애니메이션
  const headerStatusRef = useRef("show");
  const headerAnim = useRef(new Animated.Value(0)).current;
  const headerBgAnim = useRef(new Animated.Value(0)).current;

  console.log(getStatusBarHeight() + 40);

  const onScrollBeginDrag = (e) => {
    beginDragRef.current = e.nativeEvent.contentOffset.y;
  };
  const onScroll = (e) => {
    onScrollHeader(e);
    onScrollHeaderBg(e);
  };

  const onScrollEndDrag = (e) => {
    onScrollEndDragHeader(e);
  };

  // 배경 애니메이션
  const onScrollHeaderBg = (e) => {
    const y = e.nativeEvent.contentOffset.y;
    if (y > 0) {
      headerBgAnim.setValue(y);
    }
  };

  // header animation
  const hehehgiht = getStatusBarHeight() + 40 + 20;
  // ! 스크롤로 직접 올려보고, 맞는 위치 정해보기
  const onScrollHeader = (e) => {
    const dy = e.nativeEvent.contentOffset.y - beginDragRef.current;
    console.log(dy);
    // to the show
    // ? 보여지게 하는 애니메이션은 조금 더 섬세한 핸들링이 필요하다.
    if (dy < 0 && dy > -hehehgiht && headerStatusRef.current === "hide") {
      headerAnim.setValue(dy + hehehgiht);
    }
    // to the hide
    if (dy > 0 && headerStatusRef.current === "show") {
      headerAnim.setValue(dy);
    }
  };

  const onScrollEndDragHeader = (e) => {
    const dy = e.nativeEvent.contentOffset.y - beginDragRef.current;
    if (dy < 0) {
      Animated.timing(headerAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
      headerStatusRef.current = "show";
    }
    if (dy > 0) {
      Animated.timing(headerAnim, {
        toValue: hehehgiht,
        duration: 300,
        useNativeDriver: false,
      }).start();
      headerStatusRef.current = "hide";
    }
  };

  return {
    scrollValueAnim,
    backgroundAnim,
    showenHeader,
    headerAnim,
    scrollAnim,
    headerBgAnim,
    onScroll,
    onScrollBeginDrag,
    onScrollEndDrag,
  };
}
