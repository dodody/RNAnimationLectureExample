import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import AnimatedValue from "./src/chapter2/02AnimatedValue/AnimatedValue";
import AnimatedSpring from "./src/chapter2/AnimatedSpring";
import AnimatedDecay from "./src/chapter2/05animatedDecay/AnimatedDecay";
// import AnimatedCombining from "./src/chapter2/06animatedCombining/AnimatedCombining";
import AnimatedCombining from "./src/chapter2/Combining";
import AnimatedOtherMethod from "./src/chapter2/AnimatedOtherMethod";
import AnimatedComposing from "./src/chapter2/AnimatedComposing";

import AnimatedProperty from "./src/chapter2/07animatedInterpolation/AnimatedProperty";
import AnimatedInterpolation from "./src/chapter2/AnimatedInterpolation";

import Snackbar from "./src/chapter3/01snackbar/Snackbar";
import SnackbarAnimation from "./src/chapter3/01snackbar/SnackbarAnimation";
import DrawerMenu from "./src/chapter3/02drawerMenu/DrawerMenu";
import AnimatedCollapse from "./src/chapter3/03collapse/AnimatedCollapse";
import Collapse from "./src/chapter3/03collapse/Collapse";
import Progressbar from "./src/chapter3/Progressbar";
import ProgressbarAnimation from "./src/chapter3/ProgressbarAnimation";
import Skeleton from "./src/chapter3/Skeleton";
import SnowBackground from "./src/chapter3/SnowBackground";

// import LayoutAnimationIntro from './src/chapter4/LayoutAnimationIntro'
// import LayoutAnimationPageHeader from './src/chapter4/LayoutAnimationPageHeader'
// import LayoutAnimationCollapse from './src/chapter4/LayoutAnimationCollapse'

// import InteractionManagerIntro from './src/chapter5/InteractionManagerBasic'

// import PanresponderIntro from './src/chapter6/PanresponderIntro'
// // import PanresponderBasic from "./src/chapter6/PanresponderBasic";
// import PanresponderBall from './src/chapter6/PanresponderBall'
// // ! animted.addListener  로 데이터를 확인할 수 있을 것!
// // import PanresponderBox from "./src/chapter6/PanresponderBox";
// import PanresponderModalView from './src/chapter6/PanresponderModalView'
// import PanresponderModalAnimation from './src/chapter6/PanresponderModalAnimation'
// import PanresponderBannerSlider from './src/chapter6/PanresponderBannerSlider'
// import PanresponderFontSlider from './src/chapter6/PanresponderFontSlider'

// import ViewLayoutEvent from "./src/chapter7/ViewLayoutEvent";

// import FlatlistCheckRenderList from "./src/chapter8/FlatlistCheckRenderList";

// import YoutubeMusic from "./src/chapter9/YoutubeMusic";

import MobilePay from "./src/chapter10/MobilePay";

const App = () => {
  return (
    <View style={styles.wrapper}>
      <MobilePay />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#ffa100",
  },
});

export default App;
