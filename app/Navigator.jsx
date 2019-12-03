import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { HomeView } from './views/HomeView';
import { ProductView } from './views/ProductView';
// Remaining views here

import { Appbar } from 'react-native-paper';

const ROUTE_NAMES = {
    HOME: 'Home',
    PRODUCT: 'Product'
};

const MainNavigator = createStackNavigator(
    {
        [ROUTE_NAMES.HOME]: { screen: HomeView },
        [ROUTE_NAMES.PRODUCT]: { screen: ProductView }
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            const { goBack = () => {} } = navigation;
            const routeName = navigation?.state?.routeName;
            return {
                header: (
                    <Appbar.Header>
                        {routeName !== ROUTE_NAMES.HOME && (
                            <Appbar.BackAction onPress={() => goBack()} />
                        )}
                    </Appbar.Header>
                )
            };
        }
    }
);

const Navigator = createAppContainer(MainNavigator);

export { Navigator, ROUTE_NAMES };
