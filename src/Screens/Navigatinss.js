import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Camera from "./Camera";
import Profile from "./Profile";
import Like from "./Like";
import Add from "./Add";
import TabBar from "react-native-custom-navigation-tabs";

const Navigatinss = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name == "Home") {
              iconName = focused ? "home" : "ios-home-sharp";
            } else if (route.name == "Search") {
              iconName = focused ? "search" : "search";
            } else if (route.name == "Add") {
              iconName = focused ? "add" : "add";
            } else if (route.name == "love") {
              iconName = focused ? "heart" : "heart";
            } else if (route.name == "Profile") {
              iconName = focused ? "person" : "person";
            }
            return <Ionic name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Search"
          component={Profile}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Add"
          component={Like}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="love"
          component={Camera}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Profile"
          component={Add}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigatinss;

const styles = StyleSheet.create({});
