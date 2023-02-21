import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import { client, urlFor } from '../client';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);
  // QUERY TO FETCH DETAILS OF FEATURED CATEGORIES
  const QUERY = `*[_type=="Category"]{image}`;



  //as soon as screen mounts do something
  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerShown: false,
      }
    )
  }, []);


  useEffect(() => {
    client.fetch(QUERY).then((data) => {
      // setFeaturedCategories(data);
      // console.log("DATA: ", data[0].image);
      // console.log("IMAGE: ", urlFor(data[0].image).url());
    })
  }, []);

  // console.log("FC: ", featuredCategories);

  return (
    <SafeAreaView className=" bg-white  pt-11 pb-2">

      {/* Header  */}

      <View className="flex-row">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-5 rounded-full ml-3"
        />

        <View className="flex-1  pl-2">
          <Text className="font-bold text-gray-400 text-xs">
            Deliver now !
          </Text>
          <View className="flex-row ">
            <Text className="font-black text-lg">Current Location</Text>
            <View className="flex-1 pt-2 pl-1">
              <ChevronDownIcon size={15} color="#00CCBB"></ChevronDownIcon>
            </View>
          </View>
        </View>

        <View className="pr-1 mr-2">
          <UserIcon size={25} color="#00CCBB" ></UserIcon>
        </View>
      </View>

      {/* Search In Header  */}

      <View className="flex-row justify-between items-center mb-3">
        <View className="flex-row bg-gray-200 mx-3 flex-1 space-x-2 p-2" >
          <MagnifyingGlassIcon size={20} color="gray"></MagnifyingGlassIcon>
          <TextInput
            placeholder=' Restaurants and cuisines'
            keyboardType='default'
            textAlign='center'
          />
        </View>
        <View className="pr-1  mr-2">
          <AdjustmentsVerticalIcon size={25} color="#00CCBB"></AdjustmentsVerticalIcon>
        </View>
      </View>


      {/* Body  */}

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >


        {/* Categories  */}
        <Categories />

        {/* Featured rows  */}

        <FeaturedRow
          title="Offers Near You"
          description="Why not support your local restaurant tonight!"
        />

        <FeaturedRow
          title="Featured"
          description="Our recommended restaurant"
        />

        <FeaturedRow
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts"
        />



      </ScrollView>

    </SafeAreaView>
  )
}


