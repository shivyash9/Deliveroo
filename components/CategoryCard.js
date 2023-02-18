import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {
  return (
    <View>
      <TouchableOpacity>
      <Image source = {
        {
          uri: imgUrl,
        }
      }
      className = "h-20 w-20 rounded m-1 p-2"
      />
      <Text className = "absolute bottom-1 left-1 text-white font-bold text-center">{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CategoryCard