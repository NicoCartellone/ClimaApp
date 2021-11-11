import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../screens/Home';
import Search from '../screens/Search';
import About from '../screens/About';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();

const MainTab = ({ navigate }) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#51608F"
            inactiveColor="#5B5A5A"
            barStyle={{
                backgroundColor: "#EDF2F4",
                position: "absolute",
                overflow: "hidden",
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
            }}
        >
            <Tab.Screen
                name="MainTab"
                component={Home}
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color }) => {
                        return <MaterialCommunityIcons name="home" color={color} size={26}></MaterialCommunityIcons>
                    },
                }}
            />
            <Tab.Screen
                name="Searh"
                component={Search}
                options={{
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({ color }) => {
                        return <MaterialCommunityIcons name="magnify" color={color} size={26}></MaterialCommunityIcons>
                    },
                }}
            />
            <Tab.Screen
                name="About"
                component={About}
                options={{
                    tabBarLabel: 'Nosotros',
                    tabBarIcon: ({ color }) => {
                        return <MaterialCommunityIcons name="information" color={color} size={26}></MaterialCommunityIcons>
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTab
