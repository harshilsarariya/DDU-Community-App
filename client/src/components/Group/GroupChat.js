import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { TextInput } from "react-native-paper";

const GroupChat = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="h-screen flex-1">
          {/* Profile component */}
          <TouchableOpacity className="bg-white p-2  rounded-xl flex flex-row items-center pt-10">
            <View className="bg-gray-200 rounded-full p-2">
              <Feather name="user" size={30} color="black" />
            </View>
            <View className="ml-5 w-9/12 flex flex-row justify-between items-center">
              <View className="">
                <Text className="font-bold text-lg">Tony Stark</Text>
                <Text className="text-[#9a9a9a]">Online</Text>
              </View>
              <View className="flex flex-row  items-center space-x-2">
                <Ionicons name="videocam-outline" size={26} color="#a8a8a9" />
                <Ionicons name="call-outline" size={20} color="#a8a8a9" />
              </View>
            </View>
          </TouchableOpacity>

          {/* Chat Area */}

          {/* send message */}
          <View className="bg-white p-2 absolute bottom-0 right-[0] mb-3 w-full flex flex-row items-center">
            <TextInput
              label="Type here..."
              mode="outlined"
              outlineColor="#FAFAFA"
              className="bg-gray-100 w-10/12"
              onChangeText={(text) => setText(text)}
            />
            <TouchableOpacity className="mx-auto">
              <Ionicons name="send" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default GroupChat;
