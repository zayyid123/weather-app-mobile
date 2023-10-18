import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View } from 'react-native'

const Layout = () => {
  return (
    <View>
      <StatusBar style='light' translucent={false} backgroundColor='#000'/>
      <Slot/>
    </View>
  )
}

export default Layout