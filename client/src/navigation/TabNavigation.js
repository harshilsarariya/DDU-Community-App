import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import HomeNavigation from "./HomeNavigation";
import GroupNavigation from "./GroupNavigation";
import ClubNavigation from "./ClubNavigation";
import EventNavigation from "./EventNavigation";
import ResourceNavigation from "./ResourceNavigation";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, View } from "react-native";

const Tab = createBottomTabNavigator();

const Tabarr = [
    { route: 'Home', label: 'Home', activeIcon: 'home', inActiveIcon: 'home', component: HomeNavigation },
    { route: 'Clubs', label: 'Clubs', activeIcon: 'group', inActiveIcon: 'group', component: ClubNavigation },
    { route: 'Chat', label: 'Groups', activeIcon: 'chat-bubble', inActiveIcon: 'chat-bubble-outline', component: GroupNavigation },
    { route: 'Events', label: 'Events', activeIcon: 'event', inActiveIcon: 'event', component: EventNavigation },
    { route: 'Resources', label: 'Resources', activeIcon: 'notes', inActiveIcon: 'notes', component: ResourceNavigation },

];

const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator
      screenOptions={{headerShown:false}}
        initialRouteName="HomeNavigation"
      >
      {Tabarr.map((val, idx) => {
        return(
            <>
                <Tab.Screen  name={val.route} component={val.component}
                options={{
                    tabBarShowLabel: false,
                            // tabBarLabel: val.label,
                            tabBarIcon: ({ color, focused }) => (
                                <MaterialIcons type={val.type} name={focused ? val.activeIcon : val.inActiveIcon} color={focused ? "#ef4444" : "#000"} size={30} />
                            ),
                            tabBarStyle:{
                                height:64,
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center"
                            }
                            
                }}
                />
            </>
        )
      })}
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;
