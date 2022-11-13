import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

import AnimatedValue from './src/chapter2/02AnimatedValue/AnimatedValue'
import AnimatedSpring from './src/chapter2/AnimatedSpring'
import AnimatedDecay from './src/chapter2/05animatedDecay/AnimatedDecay'
// import AnimatedCombining from "./src/chapter2/06animatedCombining/AnimatedCombining";
import AnimatedCombining from './src/chapter2/Combining'
import AnimatedOtherMethod from './src/chapter2/AnimatedOtherMethod'
import AnimatedComposing from './src/chapter2/AnimatedComposing'

import AnimatedProperty from './src/chapter2/07animatedInterpolation/AnimatedProperty'
import AnimatedInterpolation from './src/chapter2/AnimatedInterpolation'

import Snackbar from './src/chapter3/01snackbar/Snackbar'
import SnackbarAnimation from './src/chapter3/01snackbar/SnackbarAnimation'
import DrawerMenu from './src/chapter3/02drawerMenu/DrawerMenu'
import AnimatedCollapse from './src/chapter3/03collapse/AnimatedCollapse'

const App = () => {
  return (
    <View style={styles.wrapper}>
      <DrawerMenu />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#ffa100",
  },
})

export default App
