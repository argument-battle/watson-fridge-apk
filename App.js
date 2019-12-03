import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeView from "./app/views/HomeView";
import ProductView from "./app/views/ProductView";
// Remaining views here

const MainNavigator = createStackNavigator({
  Home: {screen: HomeView},
  Product: {screen: ProductView}
});

const App = createAppContainer(MainNavigator);

export default App;
