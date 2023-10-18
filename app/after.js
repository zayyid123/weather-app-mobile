import React from 'react'
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router';
import LottieView from 'lottie-react-native';

// icon
import { Bars3Icon } from 'react-native-heroicons/solid'

// dummy
const dummyData = [
  {
    time: '16.00',
    degrees: '29°',
    animation: require('../assets/lottie/hujan.json')
  },
  {
    time: '18.00',
    degrees: '26°',
    animation: require('../assets/lottie/sore_berawan.json')
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

const After = () => {
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
        className='flex-1 justify-between'
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
                className='text-[#72737B] font-semibold text-sm'
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
                className='text-[#F8F8F8] font-semibold text-sm'
              >
                After
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* card */}
        <FlatList
          data={["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return(
              <View
                className='my-8'
              >
                {/* header */}
                <View
                  className='flex-row justify-between items-start mb-8'
                >
                  <View
                    className='flex-row'
                  >
                    <Text className='text-[#F8F8F8] font-bold text-lg mr-2'>{item}</Text>
                    <LottieView
                      autoPlay
                      style={{
                        width: 40,
                        height: 40,
                      }}
                      source={require('../assets/lottie/hujan.json')}
                    />
                  </View>

                  <View
                    className='flex-row'
                  >
                    {/* max */}
                    <View
                      className='flex-row mr-4 items-end'
                    >
                      <Text className='text-[#72737B] mr-1'>max.</Text>
                      <Text className='text-[#F8F8F8] font-bold text-base'>25°</Text>
                    </View>

                    {/* min */}
                    <View
                      className='flex-row items-end'
                    >
                      <Text className='text-[#72737B] mr-1'>min.</Text>
                      <Text className='text-[#F8F8F8] font-bold text-base'>11°</Text>
                    </View>
                  </View>
                </View>

                {/* body */}
                <FlatList
                  data={dummyData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => {
                    return(
                      <View>
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
                        </TouchableOpacity>

                        {/* time */}
                        <View 
                          className='items-center mt-2'
                        >
                          <Text className='text-[#72737B]'>{item.time}</Text>
                        </View>
                      </View>
                    )
                  }}
                />
              </View>
            )
          }}
        />

      </View>
    </View>
  )
}

export default After