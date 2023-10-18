import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'

const App = () => {
  return (
    <View>
      <StatusBar style='light' translucent={false} backgroundColor='#000'/>
      <Text>App</Text>
    </View>
  )
}

export default App