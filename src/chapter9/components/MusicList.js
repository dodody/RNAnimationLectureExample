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
export default function MusicList() {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        console.log(111);
        moveAnim.setValue(gestureState.dx);
      },
    })
  ).current;

  return (
    <View style={{ marginVertical: 20 }}>
      <View>
        <Title />
        <Animated.View style={{ flexDirection: "row" }}>
          <ScrollView
            nestedScrollEnabled={true}
            horizontal={true}
            style={{
              width: width * 3 + 40,
              paddingHorizontal: 20,
              paddingRight: 20,
            }}
          >
            {[...Array(3)].map((value, index) => (
              <Animated.View
                // {...panResponder.panHandlers}
                key={index}
                style={{
                  marginTop: 14,
                  width: width - 80,
                  marginRight: index === 2 ? 60 : 40,
                  marginLeft: moveAnim,
                }}
              >
                {[...Array(4)].map((value, index) => (
                  <View
                    key={index}
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <SmallMusicItem />
                  </View>
                ))}
              </Animated.View>
            ))}
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}

function Title() {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ color: "#ddd", fontSize: 12 }}>
        이 노래로 뮤직 스테이션 시작하기
      </Text>
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>
        빠른 선곡
      </Text>
    </View>
  );
}

function SmallMusicItem() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
          flexWrap: "nowrap",
          // flex: 1,
          width: "100%",
        }}
      >
        <Image
          source={{ uri: "https://picsum.photos/40" }}
          style={{ width: 40, height: 40 }}
        />
        <View style={{ marginLeft: 14, flex: 1 }}>
          <Text style={{ color: "white", marginBottom: 4, fontSize: 10 }}>
            {faker.music.genre()}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            {faker.music.songName()} {faker.music.songName()}
          </Text>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <Icon name="dots-three-vertical" size={12} color="white" />
      </View>
    </>
  );
}
