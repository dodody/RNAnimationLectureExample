import React, { useRef } from "react";
import {
  View,
  Text,
  PanResponder,
  Image,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
import { faker } from "@faker-js/faker";
import Icon from "react-native-vector-icons/Entypo";
const { width, height } = Dimensions.get("window");

export default function MusicListMedium() {
  return (
    <View style={{ marginVertical: 20 }}>
      {/* title */}
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>
          다시 듣기
        </Text>
        <View
          style={{
            borderWidth: 1,
            padding: 2,
            paddingHorizontal: 6,
            borderColor: "#ffffff50",
            borderRadius: 100,
          }}
        >
          <Text style={{ color: "#ddd", fontSize: 11, fontWeight: "bold" }}>
            더보기
          </Text>
        </View>
        {/*  */}
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ height: 300, paddingLeft: 20 }}
      >
        {[...Array(10)].map((value, index) => (
          <View key={index}>
            <MediumMusicItem />
            <MediumMusicItem />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function MediumMusicItem() {
  return (
    <View style={{ marginRight: 20 }}>
      <Image
        source={{ uri: "https://picsum.photos/100" }}
        style={{ width: width / 4, height: width / 4, borderRadius: 4 }}
      />
      <Text
        numberOfLines={2}
        style={{
          marginTop: 5,
          color: "white",
          fontSize: 10,
          height: 40,
          fontWeight: "bold",
          width: width / 4,
        }}
      >
        {faker.music.songName()}
      </Text>
    </View>
  );
}
