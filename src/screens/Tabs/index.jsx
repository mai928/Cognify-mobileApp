import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Profile from '../Profile';
import Messages from '../Messages';
import Wallet from '../Wallet';
import Cart from '../Cart';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import CartIcon from 'react-native-vector-icons/FontAwesome5'
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import PersonIcon from 'react-native-vector-icons/Ionicons'
import HomeIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../common/color';
import Home from '../Home';
import { StyleSheet, View } from 'react-native';



const CustomTabBarIcon = ({ color }) => {
    return (
        <View style={styles.iconHomeContainer}>
            <HomeIcon name='home-minus' color={color} size={25} />

        </View>

    )
}


const styles = StyleSheet.create({
    iconHomeContainer: {
        position: 'absolute',
        top: -7,
        borderColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2
        }, shadowOpacity: 0.25,
        shadowRadius: 3.35,
        elevation: 2


    }
})
const Tabs = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName='Profile'
            screenOptions={{
                headerShown: false, tabBarActiveTintColor: COLORS.lightRadiel, tabBarInactiveTintColor: COLORS.Black, tabBarLabelStyle: {
                    paddingBottom: 5
                }
            }}>


            <Tab.Screen name="Wallet"
                component={Wallet}
                options={{
                    tabBarLabel: 'Wallet',
                    tabBarIcon: ({ color }) => (
                        <Icon name='wallet' color={color} size={20} />
                    )
                }} />


            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color }) => (
                        <CartIcon name='shopping-cart' color={color} size={20} />
                    )
                }} />

            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <CustomTabBarIcon color={color} />
                    )

                }}
            />


            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ color }) => (
                        <MessageIcon name='message-processing'
                            color={color} size={20} />
                    )
                }} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <PersonIcon name='person'
                            color={color} size={20} />
                    )
                }} />


        </Tab.Navigator>
    )
}

export default Tabs