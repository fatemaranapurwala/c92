import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import stackNavigator from "./stacknavigator";
import Profile from "../screens1 /profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
