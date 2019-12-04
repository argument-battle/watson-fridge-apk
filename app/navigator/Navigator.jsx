import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { ROUTE_NAMES } from '../constants';
import { Drawer } from './components/Drawer';
import { AppBar } from './components/AppBar';

import { HomeView } from '../views/HomeView';
import { ProductView } from '../views/ProductView';
// Remaining views here

const StackNavigator = createStackNavigator(
    {
        [ROUTE_NAMES.HOME]: { screen: HomeView },
        [ROUTE_NAMES.PRODUCT]: { screen: ProductView }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            header: <AppBar navigation={navigation} />
        })
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: StackNavigator
    },
    {
        contentComponent: Drawer,
        drawerLockMode: 'locked-closed'
    }
);

const Navigator = createAppContainer(MainNavigator);

export { Navigator };
