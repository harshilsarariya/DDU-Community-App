import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
  return (
    <View className="relative">
      <ScrollView className="bg-sky-100 -z-30">
        <View className="flex space-y-4 mx-2 my-4">
          {[...Array(8)].map((val, idx) => {
            return (
              <View key={idx} className="bg-gray-50 shadow-md shadow-sky-800 rounded-2xl">
                <Chat />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <TouchableOpacity className="absolute bottom-4 bg-sky-500 rounded-full flex justify-center items-center w-12 h-12 right-4 z-50">
        <AntDesign name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const Chat = (props) => {
  return (
    <>
      <View className="flex items-center flex-row w-screen">
        <View className="p-1 w-12 h-12 rounded-full border-2 border-purple-600 ml-4">
          <Image
            className="h-full w-full rounded-full"
            source={require("../../assets/images/avatar.jpg")}
          />
        </View>
        <View className="basis-3/5 flex justify-center p-4">
          <Text className="font-semibold text-lg">Brian Snyder</Text>
          <View className="flex flex-row space-x-1">
            <Text>Lead Designer</Text>
            <Text>|</Text>
            <Text>BD20</Text>
          </View>
        </View>
        {/* <View className="w-4 -mr-12 border border-black flex justify-center">
          <MaterialCommunityIcons name="dots-vertical" size={24} color="gray" />
        </View> */}
      </View>
      <View className="flex flex-col justify-center">
        <Text className="my-2 px-4 text-sm text-gray-400">
          {new Date().toLocaleString()}
        </Text>

        <View className="mx-4">
          <Text className="text-lg">
            Your Snapdragon-powered OnePlus device can now help you Unleash your
            Dreams! Follow @Snapdragon_in to learn how.
          </Text>
          <Image
            className="h-64 mt-2 w-full rounded-2xl"
            source={require("../../assets/images/snapdragon.jpg")}
          />
        </View>
        <View className="flex flex-row justify-between mt-4 border-y border-gray-300 py-2 px-4">
          <View className="flex flex-row items-center justify-center space-x-1">
            <Ionicons name="heart-sharp" size={20} color="red" />
            <Text>2,139</Text>
          </View>
          <View className="flex flex-row items-center justify-center space-x-1">
            <EvilIcons name="share-google" size={24} color="black" />
            <Text>share</Text>
          </View>
          <View className="flex flex-row items-center justify-center space-x-1">
            <EvilIcons name="comment" size={24} color="black" />
            <Text>4</Text>
          </View>
        </View>
        <View className="px-4">
          {[...Array(1)].map((val, idx) => {
            return (
              <>
                <View className="flex flex-row items-center my-2">
                  <View className="basis-1/5">
                    <Image
                      className="h-10 w-10 rounded-full"
                      source={require("../../assets/images/avatar.jpg")}
                    />
                  </View>
                  <View className="flex flex-row basis-4/5">
                    <Text className="font-medium">
                      Mayam Carry{" "}
                      <Text className="text-sm text-slate-700 font-normal">
                        Some unknown person is roaming outside!
                      </Text>
                    </Text>
                  </View>
                </View>
              </>
            );
          })}
        </View>
        <View className="flex flex-row border-t border-gray-100">
          <View>
            <Image
              className="h-12 w-12 rounded-bl-2xl"
              source={require("../../assets/images/avatar.jpg")}
            />
          </View>
          <TextInput className="px-6" placeholder="Add a comment..." />
        </View>
      </View>
    </>
  );
};

export default Home;
