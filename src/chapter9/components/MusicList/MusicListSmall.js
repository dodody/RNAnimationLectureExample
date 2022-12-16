import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { faker } from "@faker-js/faker";
import Icon from "react-native-vector-icons/Entypo";
const { width, height } = Dimensions.get("window");

export default function MusicListSmall({ play, setPlay }) {
  const beginDragRef = useRef(0);
  const pageRef = useRef(0);
  const scrollViewRef = useRef(0);
  const moveAnim = useRef(new Animated.Value(0)).current;

  const onScrollBeginDrag = (e) => {
    beginDragRef.current = e.nativeEvent.contentOffset.x;
  };

  // !  스크롤의 정도를 읽고 행동시키기
  // !드래그의 양이 중요한게 아니라, 스크롤의 양이 중요하기 때문에,

  const onScrollEndDrag = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    const dx = x - beginDragRef.current;
    const WIDTH = width - 40;

    // ! 예상한 정도의 스크롤이 없었을 경우 기본으로 돌아가게 하는 로직
    // 다음 페이지로 안넘어감
    if (dx < WIDTH / 4) {
      console.log(2, WIDTH * pageRef.current + 1);
      scrollViewRef.current.scrollTo({
        x: WIDTH * pageRef.current,
        y: 0,
        animated: true,
      });
    }

    // ! 1/4을 드래그 했을 떄 로직, 로직의 효용성이 더 높아야 한다.
    // 2 page 이상을 할 때,
    // 다음 페이지로 넘어감
    if (dx > WIDTH / 4) {
      console.log(2, WIDTH * pageRef.current + 1);
      scrollViewRef.current.scrollTo({
        x: WIDTH * (pageRef.current + 1),
        y: 0,
        animated: true,
      });
      pageRef.current = pageRef.current + 1;
    }

    // ! dx가 음수일 때 작동하는 함수
    // 이전 페이지로 넘어감
    if (dx < 0 && dx > -WIDTH / 2) {
      console.log(3);
      scrollViewRef.current.scrollTo({
        x: WIDTH * (pageRef.current - 1),
        y: 0,
        animated: true,
      });
      pageRef.current = pageRef.current - 1;
    }
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <View>
        <Title />
        <Animated.View style={{ flexDirection: "row" }}>
          {/* // ! rn 공식문서 보면서 필요한것들 찾으면서 해야한다. */}
          <ScrollView
            ref={scrollViewRef}
            horizontal={true}
            scrollEventThrottle={1}
            onScrollBeginDrag={onScrollBeginDrag}
            onScrollEndDrag={onScrollEndDrag}
            style={{
              width: width * 3 + 40,
              paddingHorizontal: 20,
              paddingRight: 20,
            }}
          >
            {[...Array(3)].map((value, index) => (
              <Animated.View
                key={index}
                style={{
                  marginTop: 14,
                  width: width - 80,
                  marginRight: index === 2 ? 60 : 40,
                  marginLeft: moveAnim,
                }}
              >
                {[...Array(4)].map((value, index) => (
                  <TouchableWithoutFeedback onPress={setPlay}>
                    <View
                      key={index}
                      style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                      }}
                    >
                      <SmallMusicItem />
                    </View>
                  </TouchableWithoutFeedback>
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
            {faker.music.songName()}
          </Text>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <Icon name="dots-three-vertical" size={12} color="white" />
      </View>
    </>
  );
}
