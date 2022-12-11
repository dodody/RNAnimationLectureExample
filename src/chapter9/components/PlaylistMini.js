import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import { faker } from "@faker-js/faker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { LOGO_HEADER_HEIGHT, CATEGORY_HEADER_HEIGHT } from "../utils";

import PlaylistActionBar from "./PlaylistActionBar";
import PlayListMiniButtons from "./PlayListMiniButtons";
import PlayListMiniTitle from "./PlayListMiniTitle";

const { width, height } = Dimensions.get("window");

export default function PlaylistMini({ play, playListSize, setPlayListSize }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log(123);
        setPlayListSize("full");
      }}
    >
      <View>
        <View
          style={[
            playListSize === "small"
              ? { height: 60 }
              : {
                  height: height,
                  marginTop: -(LOGO_HEADER_HEIGHT + CATEGORY_HEADER_HEIGHT),
                  paddingTop: getStatusBarHeight(),
                },
            {
              backgroundColor: "#222",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 10,
              borderWidth: 1,
            },
          ]}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: "https://picsum.photos/300" }}
              style={
                playListSize === "small"
                  ? { width: 40, height: 40 }
                  : {
                      width: width * 0.8,
                      height: width * 0.8,
                    }
              }
            />
            <PlayListMiniTitle />
          </View>
          <PlayListMiniButtons play={play} />
        </View>
        <PlaylistActionBar />
      </View>
    </TouchableWithoutFeedback>
  );
}
