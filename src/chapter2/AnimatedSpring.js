import React, { useRef } from 'react'
import { Animated, StyleSheet, Button, View } from 'react-native'

export default function AnimatedSpring() {
  const translateYanim = useRef(new Animated.Value(-100)).current
  const onButtonPress = () => {
    translateYanim.setValue(-100)
    translateYanim.addListener(({ value }) => console.log(value))

    // 느슨한, 탄력적인,

    Animated.spring(translateYanim, {
      toValue: 100,

      // ! 스프링 애니메이션을 어떻게 표현하냐는 선택사항이다.
      // !속도를 위주로 스프링 애니메이션을 핸들링 하고 싶으면 이쪽을 선택하고
      bounciness: 8, // 탄력제어 8 // (이 값의 핸들링에 따라 느슨해질지 탄력을 가질지 결정된다. )
      speed: 12, // 애니메이션의 속도 12

      // ! 스프링의 에너지를 기반으로 핸들링하고 싶으면 이쪽의 선택지를 선택하고,
      // friction: 7, // 얼마나 빨리 에너지를 소비하는지 7 // (이 값의 핸들링에 따라 느슨해질지 탄력을 가질지 결정된다. )
      // tension: 40, // 스프링이 얼마나 많은 에너지를 가졌는지 40
      //

      // ! 실제 스프링을 체감하면서 애니메이션을 주고 싶을땐 이쪽을 선택하면 된다.
      // stiffness: 100, // 스프링의 강도 100
      // damping: 1, // 마찰력 10  // (이 값의 핸들링에 따라 느슨해질지 탄력을 가질지 결정된다. )
      // mass: 10, // 용수철 끝에 매달려 있는 물체의 질량 1
      //

      // ! 모두 다 스프링 에니메이션을 나타내는 것이기 때문에
      // 좋고 나쁜 것 없이 선택해서 애니메이션을 주면 되는 부분입니다.

      // ? 그리고 추가로 config로 설정할 수 있는 값들이 있는데 거기서
      // 저희는 한가지에만 더 집중하면 되는데, 바로 velocity입니다.
      // 스프링에 부착된 물체의 초기 속도를 나타내주는 값인데요, 기본값은 0입니다.
      // 값을 조금이라도 키워주면, 좀더 자연스러운 애니메이션으로 구현 가능합니다.

      velocity: 30, // 스프링에 부착된 물체의 초기 속도 0
      useNativeDriver: true,
    }).start()
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Button title="spring animation" onPress={onButtonPress} />
      <Animated.Text
        style={{
          transform: [
            {
              translateY: translateYanim,
            },
          ],
        }}
      >
        AnimatedSpring
      </Animated.Text>
    </View>
  )
}

const styles = StyleSheet.create({})
