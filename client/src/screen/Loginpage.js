import {
  Touchable,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Loginpage = (props) => {
  const [pass, setPass] = useState(false);
  const navigation = useNavigation();
  var passEye;
  if (pass) {
    passEye = (
      <Entypo
        name="eye-with-line"
        style={{ position: "absolute", bottom: 48, right: 16 }}
        size={20}
        onPress={() => setPass(false)}
      />
    );
  } else {
    passEye = (
      <Entypo
        name="eye"
        style={{ position: "absolute", bottom: 48, right: 16 }}
        size={20}
        onPress={() => setPass(true)}
      />
    );
  }
  return (
    <>
      <View className="bg-white h-full">
        <Image
          className="h-2/5 w-screen"
          source={require("../../assets/images/login.jpg")}
        />
        <View className="py-8 px-8">
          <Text className="text-center text-2xl font-bold">Login Now</Text>
          <Text className="mt-2 text-gray-400 text-center">
            Please enter the details below to continue.
          </Text>
          <View className="relative flex space-y-4 my-8">
            <TextInput
              placeholder="college id"
              className="bg-gray-100 rounded-lg px-4 py-2"
            />
            <TextInput
              placeholder="password"
              secureTextEntry={pass}
              className="bg-gray-100 rounded-lg px-4 py-2"
            />
            {passEye}
            <Text className="text-right text-red-500 font-semibold">
              Forgot Password?
            </Text>
          </View>
          <View className="flex space-y-4">
            <TouchableOpacity
              onPress={() => navigation.navigate("MainScreen")}
              className="rounded-full w-full py-4 bg-red-600"
            >
              <Text className="text-center text-white font-medium">LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-full border-2 border-slate-200 w-full py-4 bg-white">
              <View className="flex flex-row space-x-4 justify-center items-center">
                <Image
                  className="h-6 w-6"
                  source={require("../../assets/images/google.png")}
                />
                <Text className="text-center text-black font-medium">
                  Sign In with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Loginpage;
