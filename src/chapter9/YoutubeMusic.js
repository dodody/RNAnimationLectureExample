import React, { useState } from "react";
import { View, ScrollView, StatusBar, Text } from "react-native";
import Bottom from "./components/Bottom";
import HeaderBackground from "./components/HeaderBackground";
import HeaderLogo from "./components/HeaderLogo";
import HeaderCategory from "./components/HeaderCategory";
import useYoutubeMusicScroll from "./YoutubeMusicScroll.hooks";

import MusicListSmall from "./components/MusicListSmall";
import MusicListMedium from "./components/MusicListMedium";
import MusicListLarge from "./components/MusicListLarge";
import { CATEGORY_HEADER_HEIGHT } from "./utils";

export default function YoutubeMusic() {
  const [focus, setFocus] = useState(undefined);
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
            <MusicListSmall />
            <MusicListMedium />
            <MusicListLarge />
            <MusicListSmall />
            <MusicListMedium />
            <MusicListMedium />
            <MusicListLarge />
          </View>
        </ScrollView>
        <View>
          <Bottom />
        </View>
      </View>
    </>
  );
}
