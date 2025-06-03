# Penjelasan Kode `app/(tabs)/index.tsx`

Berikut adalah penjelasan bertahap mengenai cara kerja kode pada file `app/(tabs)/index.tsx` pada aplikasi React Native ini:

---

## 1. Import Library & Komponen
```tsx
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from 'react-native'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'
```
- Mengimpor ikon, gambar, fungsi API, custom hook, router, React hooks, komponen UI dari React Native, serta komponen MovieCard dan SearchBar.

---

## 2. Deklarasi Komponen Utama
```tsx
const index = () => {
```
- Mendefinisikan komponen utama halaman.

---

## 3. State dan Router
```tsx
  const [id, setId] = useState(0)
  const router = useRouter()
```
- Membuat state `id` untuk menyimpan ID film yang dipilih.
- Menginisialisasi router untuk navigasi antar halaman.

---

## 4. Fungsi Handle ID
```tsx
  function handleChangeId(id){
    setId(id)
  }
```
- Fungsi untuk mengubah state `id` saat sebuah film dipilih.

---

## 5. Debugging (Console Log)
```tsx
  console.log('id', id)
```
- Menampilkan ID film yang dipilih ke konsol (untuk debugging).

---

## 6. Fetch Data Film
```tsx
  const {data: movies, loading: moviesLoading, error: moviesError} =  useFetch(() => fetchMovies({query : ''}))
```
- Mengambil data film dari API menggunakan custom hook `useFetch`.
- Hasilnya berupa:
  - `movies`: data film
  - `moviesLoading`: status loading
  - `moviesError`: error jika ada

---

## 7. Render UI Utama
```tsx
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
```
- Membungkus seluruh tampilan dengan `View` dan memberi background.
- Menampilkan gambar background dan logo aplikasi di bagian atas.

---

## 8. Loading & Error Handling
```tsx
        {moviesLoading ? (<ActivityIndicator size='large' color='#0000ff' className='mt-10 self-center'/>) : 
        moviesError ? (<Text>{moviesError?.message}</Text>) : (
```
- Jika data sedang dimuat, tampilkan spinner.
- Jika terjadi error, tampilkan pesan error.

---

## 9. Tampilkan Konten Jika Data Berhasil
```tsx
          <View className='mt-5 w-full'>
          <SearchBar
          onPressButton={() => router.push('/search')}
          placeholderLoading='Search for movie.........'
          />
          <Text className='text-lg text-white font-bold mt-5 mb-3'>Latest Movies</Text>
          <FlatList data={movies} renderItem={({item}) => (
            <MovieCard title={item.title} onPress={() => handleChangeId(item.id)} posterUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}/>
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
```
- Jika data berhasil diambil:
  - Tampilkan SearchBar (navigasi ke halaman `/search` saat tombol ditekan).
  - Tampilkan judul "Latest Movies".
  - Tampilkan daftar film menggunakan `FlatList` dalam 3 kolom.
  - Setiap film ditampilkan dengan `MovieCard`, dan saat ditekan akan memanggil `handleChangeId` untuk menyimpan ID film ke state.

---

## 10. Penutup Komponen
```tsx
      </ScrollView>
    </View>
  )
}

export default index
```
- Menutup komponen dan mengekspornya sebagai default.

---

## Kesimpulan
File ini adalah halaman utama aplikasi yang menampilkan daftar film terbaru, menyediakan fitur pencarian, serta menangani loading dan error. Data film diambil dari API, dan setiap film bisa dipilih untuk menyimpan ID-nya ke state.
