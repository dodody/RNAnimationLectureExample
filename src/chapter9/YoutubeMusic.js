import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Bottom from './components/Bottom'
import FixedHeader from './components/FixedHeader'
import Header from './components/Header'
import PlayArea from './components/PlayArea'

export default function YoutubeMusic() {
  return (
    <View style={{ flex: 1, backgroundColor: '#222' }}>
      <SafeAreaView style={{ justifyContent: 'space-between', flex: 1 }}>
        {/* 1차 */}
        <View style={{ borderWidth: 1 }}>
          <Header />
          <FixedHeader />
        </View>

        <View style={{ flex: 1, borderWidth: 1 }}>
          {/* 이곳의 상단 배경이 바뀌는걸 감안해줘얗 */}
          <Text>리스트들 중 일반 가로 스크롤로 배치가 되어야 하는것</Text>
          <Text>리스트들 중 애니메이션이 들어가야 하는껏</Text>
        </View>

        {/* (2차) */}
        <View style={{ borderWidth: 1 }}>
          <PlayArea />
          <Bottom />
          {/* playArea의 bottom list? */}
        </View>
      </SafeAreaView>
    </View>
  )
}
