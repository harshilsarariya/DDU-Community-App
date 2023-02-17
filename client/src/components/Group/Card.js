import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";

const Card = ({ navigation, item }) => {
  const [isUnreadMessage, setIsUnreadMessage] = useState(false);

  useEffect(() => {
    if (item.unreadCount === 0) {
      setIsUnreadMessage(false);
    } else {
      setIsUnreadMessage(true);
    }
  }, []);

  return (
    <TouchableOpacity
      className="bg-white p-2  rounded-xl flex flex-row items-center m-2"
      onPress={() => navigation.navigate("GroupChat", { item: item })}
    >
      <View className="bg-gray-200 rounded-full p-2">
        <Feather name="user" size={30} color="black" />
      </View>
      <View className="ml-5 w-9/12">
        <View className="flex flex-row justify-between ">
          <Text className="font-bold text-lg">{item.title}</Text>
          <Text className="text-[#9a9a9a]">09:34 PM</Text>
        </View>
        <View className="flex flex-row justify-between items-center">
          <Text className="text-[#9a9a9a]">✔ {item.lastMessage}</Text>
          <View
            className={`${
              isUnreadMessage && "bg-[#703FFD]"
            }  px-2 py-1 rounded-full `}
          >
            <Text className="text-white">
              {item.unreadCount !== 0 && item.unreadCount}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
