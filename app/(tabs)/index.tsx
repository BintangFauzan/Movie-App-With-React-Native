import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from 'react-native'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'

const index = () => {
  const [id, setId] = useState(null)
  const router = useRouter()
  function handleChangeId(id){
    setId(id)
  }
  const {data: movies, loading: moviesLoading, error: moviesError} =  useFetch(() => fetchMovies({query : ''}))
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
        {moviesLoading ? (<ActivityIndicator size='large' color='#0000ff' className='mt-10 self-center'/>) : 
        moviesError ? (<Text>{moviesError?.message}</Text>) : (
          <View className='mt-5 w-full'>
          <SearchBar
          onPressButton={() => router.push('/search')}
          placeholderLoading='Search for movie.........'
          />
          <Text className='text-lg text-white font-bold mt-5 mb-3'>Latest Movies</Text>
          <FlatList data={movies} renderItem={({item}) => (
            <MovieCard title={item.title} onPress={() => handleChangeId(item.id)} posterUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`} id={id}/>
          )} keyExtractor={(item) => item.id.toString()} numColumns={3} columnWrapperStyle={{
            justifyContent: 'flex-start',
            gap:20,
            paddingRight: 5,
            marginBottom: 10
          }}
          className='mt-2 pb-32' scrollEnabled={true}
          />
        </View>
        )}
      </ScrollView>
    </View>
  )
}

export default index