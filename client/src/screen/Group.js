import { View, TouchableOpacity } from "react-native";
import React from "react";
import SearchBar from "../components/Group/SearchBar";
import { Feather } from "@expo/vector-icons";
import Card from "../components/Group/Card";

const data = [
  {
    title: "IT",
    lastMessage: "abcd",
    lastTime: "09:34 PM",
    unreadCount: 2,
  },
  {
    title: "IT 2024",
    lastMessage: "abcd",
    lastTime: "10:49AMM",
    unreadCount: 0,
  },
  {
    title: "CE",
    lastMessage: "abcd",
    lastTime: "12:34 PM",
    unreadCount: 4,
  },
  {
    title: "CE 2025",
    lastMessage: "abcd",
    lastTime: "09:34 PM",
    unreadCount: 2,
  },
  {
    title: "EC",
    lastMessage: "abcd",
    lastTime: "05:34 PM",
    unreadCount: 9,
  },
  {
    title: "EC 2023",
    lastMessage: "abcd",
    lastTime: "05:34 PM",
    unreadCount: 9,
  },
];

const Group = ({ navigation }) => {
  return (
    <View className="mx-2 mt-10">
      {/* Search bar and edit component */}
      <View className="flex flex-row items-center">
        <SearchBar />
        <TouchableOpacity className="bg-white p-3 rounded-lg ">
          <Feather name="edit" size={24} color="#797777" />
        </TouchableOpacity>
      </View>

      {/* Group Cards */}
      <View className="mt-3">
        {data.map((item, index) => (
          <Card item={item} key={index} navigation={navigation} />
        ))}
      </View>
    </View>
  );
};

export default Group;
