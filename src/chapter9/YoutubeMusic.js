import React, { useState } from "react";
import { View, ScrollView, StatusBar, Text } from "react-native";

import HeaderBackground from "./components/HomeHeadeer/HeaderBackground";
import HeaderLogo from "./components/HomeHeadeer/HeaderLogo";
import HeaderCategory from "./components/HomeHeadeer/HeaderCategory";
import useYoutubeMusicScroll from "./YoutubeMusicScroll.hooks";

import MusicListSmall from "./components/MusicList/MusicListSmall";
import MusicListMedium from "./components/MusicList/MusicListMedium";
import MusicListLarge from "./components/MusicList/MusicListLarge";
import PlayList from "./components/PlayList";
import { CATEGORY_HEADER_HEIGHT } from "./utils";

export default function YoutubeMusic() {
  const [focus, setFocus] = useState(undefined);
  const [play, setPlay] = useState(false);
  const {
    headerBgAnim,
    headerAnim,
    onScroll,
    onScrollBeginDrag,
    onScrollEndDrag,
  } = useYoutubeMusicScroll();

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
          <View style={{ height: 10000 }}>
            <MusicListSmall play={play} setPlay={setPlay} />
            <MusicListMedium play={play} setPlay={setPlay} />
            <MusicListLarge play={play} setPlay={setPlay} />
            <MusicListSmall play={play} setPlay={setPlay} />
            <MusicListMedium play={play} setPlay={setPlay} />
            <MusicListMedium play={play} setPlay={setPlay} />
            <MusicListLarge play={play} setPlay={setPlay} />
          </View>
        </ScrollView>
        <View style={{ zIndex: 2 }}>
          {/* android에서도 잘 작동 하는지 확인하기\ */}
          <PlayList play={play} setPlay={setPlay} />
        </View>
      </View>
    </>
  );
}
