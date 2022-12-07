import React, { useState } from "react";
import { View, ScrollView, StatusBar } from "react-native";
import Bottom from "./components/Bottom";
import FixedHeader from "./components/FixedHeader";
import Header from "./components/Header";
import PlayArea from "./components/PlayArea";
import HeaderBackground from "./components/HeaderBackground";
import { getBottomSpace } from "react-native-iphone-x-helper";
// import MusicList from "./components/MusicList";
import useYoutubeMusicScroll from "./YoutubeMusicScroll.hooks";
import MusicListSmall from "./components/MusicListSmall";
import MusicListMedium from "./components/MusicListMedium";
import MusicListLarge from "./components/MusicListLarge";

const BOTTOM_HEIGHT = 40 + getBottomSpace();
const category = ["휴식", "에너지 충전", "집중", "운동", "출퇴근/등하교"];

export default function YoutubeMusic() {
  const {
    headerAnim,
    headerBgAnim,
    onScroll,
    onScrollBeginDrag,
    onScrollEndDrag,
  } = useYoutubeMusicScroll();
  const [focus, setFocus] = useState(undefined);

  // const panResponder = useRef(
  //   PanResponder.create({
  //     onStartShouldSetPanResponder: () => true,
  //     onMoveShouldSetPanResponder: () => true,
  //     onPanResponderStart: (evt, gestureState) => {},
  //     onPanResponderMove: (evt, gestureState) => {
  //       if (gestureState.dy < 0) {
  //         // headerAnim.setValue(gestureState.dy);
  //       }
  //       if (gestureState.dy > 0 && gestureState.dy < 60) {
  //         headerAnim.flattenOffset(); // 이걸 하면 바로 위에서 올 수 있다.
  //         if (!showenHeader.current) {
  //           headerAnim.setValue(gestureState.dy - 60);
  //         }
  //       }
  //     },
  //     onPanResponderEnd: (evt, gestureState) => {
  //       if (gestureState.dy < 0) {
  //         Animated.timing(headerAnim, {
  //           toValue: -100,
  //           duration: 300,
  //           useNativeDriver: false,
  //         }).start();
  //         showenHeader.current = false;
  //         headerAnim.extractOffset();
  //       }
  //       if (gestureState.dy > 0) {
  //         Animated.timing(headerAnim, {
  //           toValue: 0,
  //           duration: 300,
  //           useNativeDriver: false,
  //         }).start();
  //         showenHeader.current = true;
  //       }
  //     },
  //   })
  // ).current;

  return (
    <View style={{ flex: 1, backgroundColor: "#111" }}>
      <StatusBar barStyle={"light-content"} />
      {/* 해더 */}
      {/* 배경은 맨 위에서만 보여야 한다. focus 여부에 따라 배경이 바뀌기 때문  */}
      <HeaderBackground focus={focus} headerBgAnim={headerBgAnim} />
      {/* header는 dy 값에 따라 계속 보여야 한다.  */}
      <Header headerAnim={headerAnim} />
      <FixedHeader
        headerAnim={headerAnim}
        category={category}
        focus={focus}
        setFocus={setFocus}
      />
      {/* 콘텐츠 */}
      <ScrollView
        // {...panResponder.panHandlers}
        scrollEventThrottle={1}
        style={{ flex: 1 }}
        scrollEnabled={true}
        nestedScrollEnabled={true}
        onScroll={onScroll}
        onScrollBeginDrag={onScrollBeginDrag}
        onScrollEndDrag={onScrollEndDrag}
      >
        <View style={{ height: 10000 }}>
          <MusicListSmall />
          <MusicListMedium />
          <MusicListLarge />
          {/* <MusicList /> */}
        </View>
      </ScrollView>
      <View style={{ borderWidth: 1 }}>
        <PlayArea BOTTOM_HEIGHT={BOTTOM_HEIGHT} />
        <Bottom BOTTOM_HEIGHT={BOTTOM_HEIGHT} />
      </View>
    </View>
  );
}
