import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "./HomeNavigation";
import GroupNavigation from "./GroupNavigation";
import ClubNavigation from "./ClubNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={
          {
            // headerShown: false,
          }
        }
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          options={
            {
              // tabBarStyle: { display: "none" },
            }
          }
        >
          {(props) => <HomeNavigation />}
        </Tab.Screen>
        <Tab.Screen
          name="Club"
          options={
            {
              // tabBarStyle: { display: "none" },
            }
          }
        >
          {(props) => <ClubNavigation />}
        </Tab.Screen>
        <Tab.Screen
          name="Group"
          options={
            {
              // tabBarStyle: { display: "none" },
            }
          }
        >
          {(props) => <GroupNavigation />}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
