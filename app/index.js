import React from 'react'
import { Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <View>
      <StatusBar style='light' translucent={false} backgroundColor='#000'/>
      <View
        className='flex-1 min-h-screen bg-[#323338]'
      >
        <Text>Hello</Text>
      </View>
    </View>
  )
}

export default App