import React, { useState, useRef } from "react";
import { Text, Animated, Platform, UIManager } from "react-native";
import PlaylistMini from "./PlaylistMini";

export default function PlayList() {
  const pageAnim = useRef(new Animated.Value(0)).current;
  const [play, setPlay] = useState(false);
  const [playListSize, setPlayListSize] = useState("small");
  // ! 여기를 어떻게 짜면 좋을까..
  // 섬세한 컨트롤을 위해, Animated로 해보겠음.

  return (
    // ! 최대한 잘라가지고,
    <PlaylistMini
      play={play}
      playListSize={playListSize}
      setPlayListSize={setPlayListSize}
    />
  );
}
