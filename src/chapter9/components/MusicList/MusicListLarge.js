import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { faker } from "@faker-js/faker";
import Icon from "react-native-vector-icons/Entypo";
const { width, height } = Dimensions.get("window");

export default function MusicListLarge({ play, setPlay }) {
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
          맞춤 믹스
        </Text>
        <View
          style={{
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
        style={{ paddingLeft: 20 }}
      >
        {[...Array(10)].map((value, index) => (
          <TouchableWithoutFeedback key={index} onPress={setPlay}>
            <LargeMusicItem />
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}

function LargeMusicItem() {
  return (
    <View style={{ marginRight: 10 }}>
      <Image
        source={{ uri: "https://picsum.photos/100" }}
        style={{ width: width / 3, height: width / 3, borderRadius: 4 }}
      />
      <Text
        numberOfLines={2}
        style={{
          marginTop: 8,
          color: "white",
          fontSize: 12,
          height: 40,
          fontWeight: "bold",
          width: width / 3,
        }}
      >
        {faker.music.songName()}
      </Text>
    </View>
  );
}
