import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

// icon
import { Bars3Icon } from "react-native-heroicons/solid";

// dummy
const dummyData = [
  {
    time: '16.00',
    degrees: '29°',
    animation: require('../assets/lottie/sore_berawan.json')
  },
  {
    time: '18.00',
    degrees: '26°',
    animation: require('../assets/lottie/hujan.json')
  },
  {
    time: '20.00',
    degrees: '22°',
    animation: require('../assets/lottie/malam_berawan.json')
  },
  {
    time: '22.00',
    degrees: '23°',
    animation: require('../assets/lottie/malam_berawan.json')
  },
  {
    time: '00.00',
    degrees: '30°',
    animation: require('../assets/lottie/malam_cerah.json')
  },
]

const App = () => {
  return (
    <View
      className='flex-1 min-h-screen bg-[#32333B] p-4'
    >
      {/* navbar */}
      <View
        className='flex-row items-center justify-between'
      >
        <Bars3Icon fill="#F8F8F8" size={30}/>

        {/* city */}
        <View
          className='items-end'
        >
          <Text className='text-[#72737B] text-base'>OCT 29, 2023</Text>
          <Text className='text-[#F8F8F8] font-bold text-lg'>Bangil, ID</Text>
        </View>
      </View>

      {/* content */}
      <View
        className='flex-1 justify-between pb-5'
      >
        {/* button view */}
        <View
          className='flex-row justify-evenly items-center my-5'
        >
          {/* today */}
          <TouchableOpacity
            onPress={() => {
              router.push('/')
            }}
          >
            <View
              className='p-3 mx-5'
            >
              <Text
                className='text-[#72737B] font-semibold text-sm'
              >
                Today
              </Text>
            </View>
          </TouchableOpacity>

          {/* tomorrow */}
          <TouchableOpacity
            onPress={() => {
              router.push('/tomorrow')
            }}
          >
            <View
              className='p-3 mx-5'
            >
              <Text
                className='text-[#F8F8F8] font-semibold text-sm'
              >
                Tomorrow
              </Text>
            </View>
          </TouchableOpacity>

          {/* After */}
          <TouchableOpacity
            onPress={() => {
              router.push('/after')
            }}
          >
            <View
              className='p-3 mx-5'
            >
              <Text
                className='text-[#72737B] font-semibold text-sm'
              >
                After
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* information */}
        <View>
          {/* animation */}
          <View
            className='items-center'
          >
            <LottieView
              autoPlay
              style={{
                width: 250,
                height: 250,
              }}
              source={require('../assets/lottie/sore_berawan.json')}
            />
          </View>

          {/* condition */}
          <View
            className='items-center mt-4'
          >
            <Text
              className='text-[#72737B] font-semibold'
            >
              CLOUDY
            </Text>
          </View>

          {/* temperature */}
          <View
            className='items-center mt-1'
          >
            <Text
              className='text-[#F8F8F8] font-bold text-5xl'
            >
              90°
            </Text>
          </View>
        </View>

        {/* forecasting */}
        <View
          className='mt-2'
        >
          {/* detail */}
          <View
            className='my-4'
          >
            {/* wind and feeling */}
            <View
              className='flex-row justify-between'
            >
              <Text className='text-[#72737B]'>Wind: 11km/h</Text>
              <Text className='text-[#72737B]'>Feeling: 26°</Text>
            </View>

            {/* Humidity and uv */}
            <View
              className='flex-row justify-between'
            >
              <Text className='text-[#72737B]'>Humidity: 47%</Text>
              <Text className='text-[#72737B]'>UV: 3</Text>
            </View>
          </View>

          {/* card */}
          <FlatList
            data={dummyData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return(
                <TouchableOpacity
                  className='bg-[#46474C] mx-1 p-4 rounded-2xl'
                >
                  {/* animation */}
                  <View>
                    <LottieView
                      autoPlay
                      style={{
                        width: 60,
                        height: 60,
                      }}
                      source={item.animation}
                    />
                  </View>

                  {/* time */}
                  <View
                    className='mt-2'
                  >
                    <Text
                      className='text-[#72737B]'
                    >
                      {item.time}
                    </Text>
                  </View>

                  {/* degrees */}
                  <View
                    className='mt-1'
                  >
                    <Text
                      className='text-[#F8F8F8] font-bold'
                    >
                      {item.degrees}
                    </Text>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default App