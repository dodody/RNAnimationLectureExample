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

export default function YoutubeMusic() {
  const [focus, setFocus] = useState(undefined);
  const { onScroll, onScrollBeginDrag, onScrollEndDrag } =
    useYoutubeMusicScroll();

  return (
    <>
      <StatusBar barStyle={"light-content"} />

      <View style={{ flex: 1, backgroundColor: "#111" }}>
        <HeaderBackground focus={focus} />
        <HeaderLogo />
        <HeaderCategory focus={focus} setFocus={setFocus} />

        <ScrollView
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
