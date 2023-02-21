import { Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const RestaurantScreen = () => {
  // const route = useRoute(); //all passed props will be in route

  //We can destructure it
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_descriptin,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  
  return (
    <View>
      <Text>RestaurantScreen</Text>
    </View>
  )
}

export default RestaurantScreen

