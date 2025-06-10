import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'

const search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data: movies, loading: moviesLoading, error: moviesError, refetch: loadMovies, reset } = useFetch(() => fetchMovies({ query: searchQuery }), false)
  console.log("cari", searchQuery)

  useEffect(() => {
    const timeoutId = setTimeout( async () => {
      if(searchQuery.trim()) {
        await loadMovies();
      }else{
        reset()
      }
    }, 500);
    return () => clearTimeout(timeoutId);

  }, [searchQuery]);
  return (
    <View className='flex-1 bg-gray-950'>
      <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover'/>
      <FlatList data={movies} renderItem={({item}) => (
        <MovieCard title={item.title} posterUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`} onPress={() => {}} id={item.id}/>
      )} keyExtractor={(item) => item.id.toString()} numColumns={3} columnWrapperStyle={{
        justifyContent: 'flex-start',
        gap: 16,
        marginVertical: 16,
      }} className='px-5' contentContainerStyle={{paddingBottom: 100}}
      ListHeaderComponent={
        <>
        <View className='w-full flex-row justify-center mt-20 items-center'>
          <Image source={icons.logo} className='2-12 h-10 mt-20 mb-5 mx-auto'/>
        </View>
        <View className='my-5'>
          <SearchBar
          placeholderLoading='Search for movie.........'
          valueText={searchQuery}
          onChangeText={(text: string) => setSearchQuery(text)}
          />
        </View>
        {moviesLoading && (<ActivityIndicator size='large' color='#0000ff' className='mt-10 self-center'/>)}
        {moviesError && (<Text className='text-red-800 text-center mt-5'>Error : {moviesError?.message}</Text>)}
        {!moviesLoading && !moviesError && searchQuery.trim() && movies?.length > 0 && (
          <Text className='text-xl text-white font-bold'>Search Result For {searchQuery}
          {/* <Text className='text-fuchsia-600'>{searchQuery}</Text> */}
          </Text>
        )}
        </>
      }
      ListEmptyComponent={
        <View className='mt-10 px-5'>
          <Text className='text-red-600 text-xl text-center'>
            {(!moviesLoading && searchQuery.trim()) ? 'No results found' : 'Please enter a search query'}
          </Text>
        </View>
      }
      />
    </View>
  )
}

export default search