import { Link } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function MovieCard({ title, posterUrl, onPress, id }) {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity
      onPress={onPress}
      className="flex-1 m-1 rounded-xl overflow-hidden bg-[#232136] shadow-md min-w-[100px] max-w-[120px] items-center"
      activeOpacity={0.8}
    >
      {posterUrl ? (
        <Image
          source={{ uri: posterUrl }}
          className="w-[100px] h-[150px] rounded-lg bg-[#444]"
          resizeMode='cover'
        />
      ) : (
        <View className="w-[100px] h-[150px] rounded-lg bg-[#444] justify-center items-center">
          <Text className="text-white text-3xl">🎬</Text>
        </View>
      )}
      <Text
        numberOfLines={2}
        className="text-white font-bold text-xs mt-2 text-center px-1"
      >
        {title}
      </Text>
    </TouchableOpacity>
    </Link>
  )
}