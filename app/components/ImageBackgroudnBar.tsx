import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

const ImageBackgroudnBar = ({ imageBg, icons, children, focuse }: any) => {
    if (focuse) {

    
  return (
    <>
      <ImageBackground
        source={imageBg}
        className='flex flex-row w-full flex-1 min-w-[95px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden px-3 py-2' // Tambahkan padding horizontal (px-3) dan vertikal (py-2)
      >
        <Image
          source={icons}
          tintColor={'#151312'}
          className='size-5 mr-2' // Tambahkan margin kanan (mr-2) untuk memberi jarak antara ikon dan teks
        />
        <Text className='text-secondary text-base font-semibold'>{children}</Text>
      </ImageBackground>
    </>
  )}
  return(
    <View className='size-full justify-center items-center mt-4 rounded-full'>
        <Image
        source={icons}
        tintColor='#A8B5DB'
        />
    </View>
  )
};

export default ImageBackgroudnBar;