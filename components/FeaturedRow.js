import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/solid'
import { ScrollView } from 'react-native-gesture-handler'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View className="mt-4 items-center justify-between px-4 flex-row">
        <Text className="font-bold text-lg">
          {title}
        </Text>
        <ArrowRightIcon color="#00CCBB"></ArrowRightIcon>
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        // Har scroll View ke andar ke content ki styling 
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}

        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >

        {/* Restaurantcard */}
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_descriptin="This is Test descr"
          dishes={{}}
          long={20}
          lat={0}
        />


        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_descriptin="This is Test descr"
          dishes={{}}
          long={20}
          lat={0}
        />


        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_descriptin="This is Test descr"
          dishes={{}}
          long={20}
          lat={0}
        />


        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_descriptin="This is Test descr"
          dishes={{}}
          long={20}
          lat={0}
        />

        
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main Street"
          short_descriptin="This is Test descr"
          dishes={{}}
          long={20}
          lat={0}
        />

      </ScrollView>
    </View>
  )
}

export default FeaturedRow