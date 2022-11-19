import {
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function LayoutAnimationPageHeader() {
  const scrollRef = useRef();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    scrollRef.current?.scrollTo({ x: 0, y: 0 });
  }, []);

  const onScrollAction = (e) => {
    if (e > 10) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(false);
    } else {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(true);
    }
  };

  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ height: 1000 }}
        scrollEventThrottle={1}
        onScroll={(e) => onScrollAction(e.nativeEvent.contentOffset.y)}
      >
        <View>
          {!expanded ? (
            <View>
              <View style={styles.wrapper}>
                <View style={styles.profileWrapper}>
                  <Icon name={"person"} size={140} color="#333" />
                </View>
              </View>
              <View style={styles.profileTextWrapper}>
                <Text style={styles.title}>개발자 도디</Text>
                <Text style={styles.subTitle}>
                  귀찮음이 개발자를 발전시킨다
                </Text>
              </View>
            </View>
          ) : (
            <View>
              <View style={styles.simpleWrapper}>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.simpleProfileWrapper}>
                    <Icon name={"person"} size={40} color="#333" />
                  </View>
                  <View style={styles.simpleProfileTextWrapper}>
                    <Text style={styles.simpleTitle}>개발자 도디</Text>
                    <Text style={styles.simpleSubTitle}>
                      귀찮음이 개발자를 발전시킨다
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  // heavy mode
  wrapper: {
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  profileWrapper: {
    marginTop: 150,
    marginBottom: -30,
    width: 180,
    height: 180,
    borderRadius: 1000,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 10,
      height: -10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  profileTextWrapper: {
    height: 1200,
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
  },

  // simple mode
  simpleWrapper: {
    height: 110,
    backgroundColor: "#333",
    paddingLeft: 20,
    alignItems: "flex-end",
    zIndex: 10000,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    alignContent: "stretch",
    flexDirection: "row",
  },

  simpleProfileWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#222",
    borderRadius: 100,
    marginBottom: -10,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: {
      width: 10,
      height: -10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  simpleProfileTextWrapper: {
    marginLeft: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
  },
  simpleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 1,
    color: "#f2f2f2",
  },
  simpleSubTitle: {
    fontSize: 12,
    color: "#f2f2f2",
  },
});
