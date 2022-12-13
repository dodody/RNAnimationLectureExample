import React, { useState, useRef } from "react";
import { View, ScrollView, StatusBar, Animated } from "react-native";

import HeaderBackground from "./components/HomeHeadeer/HeaderBackground";
import HeaderLogo from "./components/HomeHeadeer/HeaderLogo";
import HeaderCategory from "./components/HomeHeadeer/HeaderCategory";
import useYoutubeMusicScroll from "./YoutubeMusicScroll.hooks";

import MusicListSmall from "./components/MusicList/MusicListSmall";
import MusicListMedium from "./components/MusicList/MusicListMedium";
import MusicListLarge from "./components/MusicList/MusicListLarge";
import PlayList from "./components/PlayList";
import Bottom from "./components/HomeBottom/Bottom";
import { CATEGORY_HEADER_HEIGHT } from "./utils";

export default function YoutubeMusic() {
  const [focus, setFocus] = useState(undefined);
  const [play, setPlay] = useState(false);
  const heightAnim = useRef(new Animated.Value(0)).current;

  const {
    headerBgAnim,
    headerAnim,
    onScroll,
    onScrollBeginDrag,
    onScrollEndDrag,
  } = useYoutubeMusicScroll();

  const onPress = () => {
    setPlay((el) => el + 1);
  };

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <View style={{ flex: 1, backgroundColor: "#111" }}>
        {/* ScrollView onScroll 값에 반응하는 header 애니메이션 */}
        {/* // ! 마스터 플랜을 보여주면서, y 값에만 반응하는걸 보여주면 된다. */}
        <HeaderBackground focus={focus} headerBgAnim={headerBgAnim} />
        {/* // ! 마스터 플랜을 보여주면서 dy값에 반응하는걸 보여준다. */}
        <HeaderLogo headerAnim={headerAnim} headerBgAnim={headerBgAnim} />
        <HeaderCategory
          focus={focus}
          setFocus={setFocus}
          headerBgAnim={headerBgAnim}
        />

        <ScrollView
          scrollEventThrottle={1}
          style={{
            flex: 1,
            marginTop: -CATEGORY_HEADER_HEIGHT,
            paddingTop: CATEGORY_HEADER_HEIGHT,
          }}
          scrollEnabled={true}
          nestedScrollEnabled={false}
          onScroll={onScroll}
          onScrollBeginDrag={onScrollBeginDrag}
          onScrollEndDrag={onScrollEndDrag}
        >
          <View style={{ paddingBottom: 100 }}>
            <MusicListSmall play={play} setPlay={onPress} />
            <MusicListMedium play={play} setPlay={onPress} />
            <MusicListLarge play={play} setPlay={onPress} />
          </View>
        </ScrollView>
        <Bottom heightAnim={heightAnim} />
        <PlayList play={play} setPlay={setPlay} heightAnim={heightAnim} />
      </View>
    </>
  );
}
