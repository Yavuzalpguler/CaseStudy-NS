import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
    SignUp,
    Splash,
    Notification,
    Photo,
    TextUpload,
    Calculator
} from './pages'


const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
    return (

        <HomeStack.Navigator initialRouteName="Splash" headerMode="none">
            <HomeStack.Screen name="Splash" component={Splash} />
            <HomeStack.Screen name="SignUp" component={SignUp} />
            <HomeStack.Screen name="Tab" component={TabScreen} />

        </HomeStack.Navigator>
    )

};

const TabScreen = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                keyboardHidesTabBar: true,
                showLabel: true,
                tabBarIcon: true,
                
                
            }}
        >
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Photo" component={Photo} />
            <Tab.Screen name="Text" component={TextUpload} />
            <Tab.Screen name="Calculator" component={Calculator} />
        </Tab.Navigator>
    );
};

function Router() {
    return (
        <NavigationContainer>
            <HomeStackScreen />
        </NavigationContainer>
    );
};

export default Router