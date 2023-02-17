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
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const GroupChat = () => {
  const [msgCount, setMsgCount] = useState(0);
  const [text, setText] = useState("");
  const route = useRoute();
  const me = "Harshil";
  const [key, setKey] = useState("k");

  const [messages, setmessages] = useState([
    {
      msg: "Hello Students",
      sender: "Prof. HBP",
    },
  ]);
  const { item } = route.params;

  const handleCount = () => {
    let cnt = msgCount + 1;
    setMsgCount(cnt);
  };

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
                <Text className="font-bold text-lg">{item.title}</Text>
                {/* <Text className="text-[#9a9a9a]">Online </Text> */}
              </View>
              <View className="flex flex-row  items-center space-x-2">
                <Ionicons name="call-outline" size={20} color="#a8a8a9" />
              </View>
            </View>
          </TouchableOpacity>
          <View key={key} className="flex flex-col">
            {messages.map((item) => {
              return (
                <View
                  className={`p-2 m-2 rounded-lg flex  ${
                    item.sender === me ? "self-end" : "self-start"
                  }`}
                >
                  <Text className="mt-1 ml-2  font-bold ">{item.sender}</Text>
                  <View className="flex flex-row">
                    <View
                      className={` ${
                        item.sender === me ? "bg-[#dce1f4]" : "bg-[#a4b8ff]"
                      }  p-2 rounded-b-xl rounded-r-lg  flex flex-row`}
                    >
                      <Text
                        className={`${item.sender === me ? "" : "text-white"}`}
                      >
                        {item.msg}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>

          {/* send message */}
          <View className="bg-white p-2 absolute bottom-0 right-[0] mb-3 w-full flex flex-row items-center">
            <TextInput
              label="Type here..."
              mode="outlined"
              outlineColor="#FAFAFA"
              className="bg-gray-100 w-10/12"
              onChangeText={setText}
            />
            <TouchableOpacity
              className="mx-auto"
              onPress={(e) => {
                let msgs = messages;
                msgs.push({ sender: me, msg: text });
                setmessages(msgs);
                setText("")
                setKey(Math.random());
              }}
            >
              <Ionicons name="send" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default GroupChat;
