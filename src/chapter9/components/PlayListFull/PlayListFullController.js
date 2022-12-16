import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { faker } from "@faker-js/faker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { width, height } = Dimensions.get("window");
export default function PlayListFullController({
  handleStopAnimation,
  panResponder,
}) {
  const [thumb, setThumb] = useState();
  const onPressThumbUp = () => {
    console.log(123123);
    handleStopAnimation();
    if (thumb === "up") {
      setThumb();
    } else {
      setThumb("up");
    }
  };
  const onPressThumbDown = () => {
    console.log(123123);
    handleStopAnimation();
    if (thumb === "down") {
      setThumb();
    } else {
      setThumb("down");
    }
  };

  return (
    <View
      {...panResponder.panHandlers}
      style={{
        flex: 1,
        position: "absolute",
        bottom: getBottomSpace(),
        width: "100%",
        borderWidth: 1,
        height:
          height -
          100 -
          width * 0.8 -
          getBottomSpace() -
          80 -
          getStatusBarHeight(),
      }}
    >
      {/* title */}
      <View
        {...panResponder.panHandlers}
        style={{ alignItems: "center", marginTop: 50 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={onPressThumbUp}>
            {thumb === "down " ? (
              <IconBox name="thumb-down" />
            ) : (
              <IconBox name="thumb-down-outline" />
            )}
          </TouchableOpacity>
          <View style={{ alignItems: "center", width: width * 0.8 - 80 }}>
            <Text
              style={{ color: "white", fontWeight: "bold", fontSize: 24 }}
              numberOfLines={1}
            >
              {faker.music.songName()}
            </Text>
          </View>
          <TouchableOpacity onPress={onPressThumbDown}>
            {thumb === "up " ? (
              <IconBox name="thumb-up" />
            ) : (
              <IconBox name="thumb-up-outline" />
            )}
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: "white",
            marginBottom: 4,
            fontWeight: "200",
            fontSize: 12,
          }}
        >
          {faker.music.genre()}
        </Text>
      </View>

      {/*  */}
      {/*  */}
      {/* time line */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{
            width: "80%",
            height: 1,
            backgroundColor: "#ffffff50",
          }}
        >
          <View
            style={{
              borderRadius: 100,
              width: 10,
              height: 10,
              marginTop: -4.5,
              left: 10,
              backgroundColor: "white",
            }}
          />
          <View
            style={{
              position: "absolute",
              height: 2,
              width: 10,
              backgroundColor: "white",
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 11, color: "white" }}>0:11</Text>
          <Text style={{ fontSize: 11, color: "white" }}>3:20</Text>
        </View>
      </View>

      {/*  */}
      {/*  */}
      {/*  */}
      {/* ButTon */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          marginBottom: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
          }}
        >
          <Icon name="shuffle" size={24} color="white" />
          <Icon name="skip-previous" size={24} color="white" />
          <View
            style={{
              width: 60,
              height: 60,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff10",
              borderRadius: 100,
            }}
          >
            <Icon name="play" size={36} color="white" />
            {/* <Icon name="pause" size={36} color="white" /> */}
          </View>
          <Icon name="skip-next" size={24} color="white" />
          <Icon name="repeat" size={24} color="white" />
        </View>
      </View>
    </View>
  );
}

function IconBox({ name }) {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon name={name} size={16} color="white" />
    </View>
  );
}
