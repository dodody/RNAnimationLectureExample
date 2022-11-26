import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Icon from "react-native-vector-icons/AntDesign";

export default function PanresponderModalView() {
  const openModal = () => {
    console.log("openModal");
  };
  const hideModal = () => {
    console.log("openModal");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="menu modal open" onPress={openModal} />
      <TouchableWithoutFeedback onPress={hideModal}>
        <View
          style={{
            position: "absolute",
            backgroundColor: "#00000080",
            height: "100%",
            width: "100%",
          }}
        />
      </TouchableWithoutFeedback>

      <View
        style={{
          position: "absolute",
          bottom: -10,
          width: "100%",
          padding: 20,
          borderTopRightRadius: 8,
          borderTopLeftRadius: 8,
          paddingBottom: 20 + getBottomSpace(),
          backgroundColor: "white",
        }}
      >
        <ListItem icon="pushpino" text="저장하기" onPress={hideModal} />
        <ListItem icon="hearto" text="좋아요" onPress={hideModal} />
        <ListItem icon="delete" text="삭제하기" onPress={hideModal} />
        <ListItem icon="back" text="닫기" color="#999" onPress={hideModal} />
      </View>
    </SafeAreaView>
  );
}

function ListItem({ icon, text, color = "#333", onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: "row",
          // justifyContent: "space-between",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#f2f2f2",
          height: 60,
          paddingHorizontal: 10,
        }}
      >
        <Icon name={icon} size={20} color={color} />
        <Text style={{ color, fontSize: 15, marginLeft: 20 }}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
