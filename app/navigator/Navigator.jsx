import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { ROUTE_NAMES } from '../constants';
import { Drawer } from './components/Drawer';
import { AppBar } from './components/AppBar';

import { HomeView } from '../views/HomeView/HomeView';
import { ProductView } from '../views/ProductView/ProductView';
import { AddProductView } from '../views/AddProductView/AddProductView';
import { RecipeSearchView } from '../views/RecipeSeatchView/RecipeSearchView';
import { SelectProductView } from '../views/SelectProductView/SelectProductView';
import { BarcodeScannerView } from '../views/BarcodeScannerView/BarcodeScannerView';

const StackNavigator = createStackNavigator(
    {
        [ROUTE_NAMES.HOME]: { screen: HomeView },
        [ROUTE_NAMES.PRODUCT]: { screen: ProductView },
        [ROUTE_NAMES.ADD_PRODUCT]: { screen: AddProductView },
        [ROUTE_NAMES.RECIPE_SEARTCH]: { screen: RecipeSearchView },
        [ROUTE_NAMES.SELECT_PRODUCT]: { screen: SelectProductView },
        [ROUTE_NAMES.BARCODE_SCANNER]: { screen: BarcodeScannerView }
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
