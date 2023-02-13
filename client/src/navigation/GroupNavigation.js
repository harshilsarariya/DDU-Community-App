import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Group from "../screen/Group";
import GroupChat from "../components/Group/GroupChat";

const Stack = createStackNavigator();

const GroupNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Group"
    >
      <Stack.Screen name="Group">
        {(props) => <Group navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name="GroupChat">
        {(props) => <GroupChat navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default GroupNavigation;
