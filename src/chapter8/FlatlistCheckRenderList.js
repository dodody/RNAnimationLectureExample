import React, { useRef, useCallback } from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native'
import { faker } from '@faker-js/faker'

export default function FlatlistCheckRenderList() {
  const renderedItems = useRef([])
  const onViewableItemsChanged = ({ viewableItems }) => {
    // 1)
    // ? 현재 디바이스 화면에 띄어져있는 화면이 보여집니다.

    // console.log(viewableItems);
    // 어떤식으로 생겼다.

    // 2) 객체를 string으로
    const ViewableItems = viewableItems.map((val) => JSON.stringify(val))
    // 어떻게 생긴걸 stringify 하는 이유는? 비교하기 쉬우라고, 새롭게 업데이트 된 데이터들을 알아볼거다.
    // renderedItem.current =
    ViewableItems.forEach((item) => {
      // ! 여기까지 하면,
      // 페이지에 띄어져 있는 모든 데이터들이 계속해서 콘솔로그에 찍히 되는데,
      // 한번 화면에 띄어진 데이터는 저장해놓고, 새로운 데이터를 봤을때만, 콘솔로그가 찍히게 해보겠습니다.
      if (renderedItems.current.findIndex((value) => value === item) === -1) {
        renderedItems.current = renderedItems.current.concat(item)
      }
    })
  }
  const viewabilityConfigCallbackPairs = useRef([{ onViewableItemsChanged }])

  return (
    <SafeAreaView>
      <View>
        <FlatList
          // ref={flatListRef}
          data={faker.datatype.array(40)}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          viewabilityConfigCallbackPairs={
            viewabilityConfigCallbackPairs.current
          }
        />
      </View>
    </SafeAreaView>
  )
}

function renderItem({ item, index }) {
  return (
    <View style={{ padding: 20, borderWidth: 0.5, borderColor: '#ddd' }}>
      <Text>
        {index}. {item}
      </Text>
    </View>
  )
}
