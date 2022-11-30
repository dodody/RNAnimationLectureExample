import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Header() {
  return (
    <View style={styles.wrapper}>
      <Image
        style={{ width: 90, height: 30 }}
        source={require('../../asset/chapter9/logo1.png')}
      />
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.iconWrapper}>
          <Icon name="cast" size={24} color="white" />
        </View>
        <View style={styles.iconWrapper}>
          <Icon name="search" size={24} color="white" />
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.profileWrapper}>
            <Icon name="perm-identity" size={24} color="white" />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconWrapper: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileWrapper: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
