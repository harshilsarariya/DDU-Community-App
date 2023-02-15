import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

const Clubs = ({navigation}) => {
  return (
    <ScrollView>
      <View className="h-96 overflow-hidden">
        <Image
          className="h-full w-full"
          source={require("../../assets/images/club.jpg")}
        />
      </View>
      <View className="-my-6 px-8 py-4 bg-white rounded-t-3xl">
        <Text className="my-2 text-2xl text-sky-500 font-medium">
          Clubs for Fun
        </Text>
        <View>
          {[...Array(8)].map((val, idx) => {
            return (
              <>
                <TouchableOpacity onPress={() => navigation.navigate("ClubPage")} key={idx} className="my-2">
                  <ClubCard />
                </TouchableOpacity>
              </>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const ClubCard = () => {
  return (
    <>
        <View className="border border-gray-100 rounded-xl p-1">
          <View className="h-20 w-full">
            <Image
              className="w-full h-full rounded-xl"
              source={require("../../assets/images/club.jpg")}
            />
          </View>
          <View>
            <Image className="w-16 h-16 rounded-full -my-8 mx-4" source={require("../../assets/images/avatar.jpg")} />
          </View>
          <View className="p-2 px-4">
            <Text className="mt-8 text-xl font-medium">Shutterbugs</Text>
            <Text>The Official photography club of DDU</Text>
          </View>
        </View>
      </>
  );
};

export default Clubs;