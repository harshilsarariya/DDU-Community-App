import React, { useState } from 'react';

import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Loginpage from "../screen/Loginpage";
import Introslider from './Introslider';
import TabNavigation from '../navigation/TabNavigation';

const AppNavigator = ({ }) => {

    const MyTheam = {
        dark: false,
        colors: {
            background: 'white',
        }
    }

    const Stack = createNativeStackNavigator();
    const [user, setUser] = useState({})

    return (
            <Stack.Navigator initialRouteName='Intro'
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name='Intro' component={Introslider} />
                <Stack.Screen name='Login' component={Loginpage} />
                <Stack.Screen name='MainScreen' component={TabNavigation} />
            </Stack.Navigator>
    )
};

export default AppNavigator;

const styles = StyleSheet.create({

});
