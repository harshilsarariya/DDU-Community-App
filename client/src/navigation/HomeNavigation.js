import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Group from "../screen/Group";
import GroupChat from "../components/Group/GroupChat";
import Home from "../screen/Home";

const Stack = createStackNavigator();

const HomeNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true, headerTitle:"Home" }}
      initialRouteName="Post"
    >
      <Stack.Screen name="Post">
        {(props) => <Home navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name="Profile">
        {(props) => <GroupChat navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeNavigation;
