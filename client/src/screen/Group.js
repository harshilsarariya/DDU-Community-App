import { View, TouchableOpacity } from "react-native";
import React from "react";
import SearchBar from "../components/Group/SearchBar";
import { Feather } from "@expo/vector-icons";
import Card from "../components/Group/Card";

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
        <Card navigation={navigation} />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
};

export default Group;
