import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface Props{
  placeholderLoading : string;
  onPressButton? : () => void;
}

const SearchBar = ({onPressButton, placeholderLoading} : Props) => {
  return (
    <View className='flex-row items-center bg-slate-900 rounded-full w-full px-5 py-4'>
      <Image source={icons.search} className='w-5 h-5' resizeMode='contain' tintColor='#ab8bff'/>
      <TextInput
      placeholder={placeholderLoading}
      placeholderTextColor='#a8b5db'
      onPress={onPressButton}
      className='flex-1 ml-2 text-pink-50'
      />
    </View>
  )
}

export default SearchBar