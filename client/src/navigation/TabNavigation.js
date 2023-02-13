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
        initialRouteName="GroupNavigation"
      >
        <Tab.Screen
          name="HomeNavigation"
          options={
            {
              // tabBarStyle: { display: "none" },
            }
          }
        >
          {(props) => <HomeNavigation />}
        </Tab.Screen>
        <Tab.Screen
          name="ClubNavigation"
          options={
            {
              // tabBarStyle: { display: "none" },
            }
          }
        >
          {(props) => <ClubNavigation />}
        </Tab.Screen>
        <Tab.Screen
          name="GroupNavigation"
          options={{
            // tabBarStyle: { display: "none" },
            headerShown: false,
          }}
        >
          {(props) => <GroupNavigation />}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
