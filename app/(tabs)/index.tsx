import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import SearchBar from '../components/SearchBar'

const index = () => {
  const router = useRouter()
  return (
    <View className='flex-1  bg-gray-950'>
      <Image source={images.bg} className='w-full h-full absolute z-0' />
      <ScrollView className='flex-1 px-5'
      showsVerticalScrollIndicator = {false}
      contentContainerStyle={{
        minHeight:100, paddingBottom:10
      }}
      >
        <Image source={icons.logo} className='w-12 h-10 mt-20 mb-5 mx-auto'/>
        <View className='mt-5 w-full'>
          <SearchBar
          onPressButton={() => router.push('/search')}
          placeholderLoading='Search for movie.........'
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default index