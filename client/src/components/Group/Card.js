import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Card = ({ navigation }) => {
  return (
    <TouchableOpacity
      className="bg-white p-2  rounded-xl flex flex-row items-center m-2"
      onPress={() => navigation.navigate("GroupChat")}
    >
      <View className="bg-gray-200 rounded-full p-2">
        <Feather name="user" size={30} color="black" />
      </View>
      <View className="ml-5 w-9/12">
        <View className="flex flex-row justify-between ">
          <Text className="font-bold text-lg">Tony Stark</Text>
          <Text className="text-[#9a9a9a]">09:34 PM</Text>
        </View>
        <View className="flex flex-row justify-between items-center">
          <Text className="text-[#9a9a9a]">✔ Perfect will check it 🔥</Text>
          <View className="bg-[#703FFD] px-2 py-1 rounded-full ">
            <Text className="text-white">2</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
