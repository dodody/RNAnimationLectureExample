import { useRef } from "react";
import { Animated, Dimensions } from "react-native";

export default function useYoutubeMusicScroll() {
  // 스크롤 값에 따른 애니메이션
  const headerAnim = useRef(new Animated.Value(0)).current;
  const headerBgAnim = useRef(new Animated.Value(0)).current;

  const onScrollBeginDrag = (e) => {
    console.log("onScrollBeginDrag");
  };
  const onScroll = (e) => {
    console.log("onScroll");
  };

  const onScrollEndDrag = (e) => {
    console.log("onScrollEndDrag");
  };

  return {
    headerAnim,
    headerBgAnim,
    onScroll,
    onScrollBeginDrag,
    onScrollEndDrag,
  };
}
