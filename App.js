import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FirstScreen from "./screens/First";
import SecondScreen from "./screens/Second";
import ThirdScreen from "./screens/Third";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition="bottom">
        <Tab.Screen name="First" component={FirstScreen} />
        <Tab.Screen name="Second" component={SecondScreen} />
        <Tab.Screen name="Third" component={ThirdScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
