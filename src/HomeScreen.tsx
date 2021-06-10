import React from 'react';
import {Text, View} from 'react-native';
import GirlScreen from './GirlScreen';
import BoyScreen from './BoyScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();



const HomeScreen: React.FC = () => { 
    return (
        <Tab.Navigator>
            <Tab.Screen name="Gấu Cái" component={GirlScreen} />
            <Tab.Screen name="Gấu đực" component={BoyScreen} />
        </Tab.Navigator>
    )
}

export default HomeScreen;