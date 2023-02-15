import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import Clubs from "../screen/Clubs";
import ClubPage from "../screen/ClubPage";

const Stack = createStackNavigator();

const ClubNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Club"
    >
      <Stack.Screen name="Club">
        {(props) => <Clubs navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name="ClubPage">
        {(props) => <ClubPage navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default ClubNavigation;
