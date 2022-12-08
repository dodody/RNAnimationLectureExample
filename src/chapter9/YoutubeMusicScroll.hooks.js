import { useRef } from "react";
import { Animated, Dimensions } from "react-native";
import { LOGO_HEADER_HEIGHT } from "./utils";

export default function useYoutubeMusicScroll() {
  const beginDragRef = useRef(0); // 드래그 시작한 시점
  // 스크롤 값에 따른 애니메이션
  const headerStatusRef = useRef("show");
  const headerBgAnim = useRef(new Animated.Value(0)).current;
  const headerAnim = useRef(new Animated.Value(0)).current;

  const onScrollBeginDrag = (e) => {
    beginDragRef.current = e.nativeEvent.contentOffset.y;
  };
  const onScroll = (e) => {
    const y = e.nativeEvent.contentOffset.y;
    const dy = e.nativeEvent.contentOffset.y - beginDragRef.current;

    // header background animation
    if (0 < y && y < 300) {
      headerBgAnim.setValue(y);
    }

    // header animation
    // logo header : 움직이는 만큼 위로 올라가게 할 것.
    if (
      0 < dy &&
      dy < LOGO_HEADER_HEIGHT &&
      headerStatusRef.current === "show"
    ) {
      // ! dy가 양수일 때 위로 올라감
      headerAnim.setValue(dy);
    }
    if (
      -LOGO_HEADER_HEIGHT < dy &&
      dy < 0 &&
      headerStatusRef.current === "hide"
    ) {
      // ! dy가 음수일 때 아래로 내려감
      headerAnim.setValue(LOGO_HEADER_HEIGHT + dy);
    }
  };

  const onScrollEndDrag = (e) => {
    const dy = e.nativeEvent.contentOffset.y - beginDragRef.current;

    // header animation
    // logo header : 움직이는 만큼 위로 올라가게 할 것.
    if (LOGO_HEADER_HEIGHT / 2 < dy) {
      // ! 높이의 반보다 많이 움직였으면 위로 붙어야 한다.
      Animated.timing(headerAnim, {
        toValue: LOGO_HEADER_HEIGHT,
        duration: 200,
        useNativeDriver: false,
      }).start();
      headerStatusRef.current = "hide";
    }
    if (LOGO_HEADER_HEIGHT / 2 > dy) {
      // ! 높이의 반보다 덜 움직였으면 원래 자리로 붙어야 한다
      // 위로 올라가게 붙게
      Animated.timing(headerAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
      headerStatusRef.current = "show";
    }
  };

  return {
    headerBgAnim,
    headerAnim,
    onScroll,
    onScrollBeginDrag,
    onScrollEndDrag,
  };
}
