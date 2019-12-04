import React from 'react';
import { Appbar, IconButton, Colors } from 'react-native-paper';
import { ROUTE_NAMES } from '../../constants';

const AppBar = ({ navigation }) => {
    const routeName = navigation?.state?.routeName;
    const isHome = routeName === ROUTE_NAMES.HOME;
    return (
        <Appbar.Header>
            {isHome ? (
                <IconButton
                    icon="menu"
                    color={Colors.black}
                    size={30}
                    onPress={() => navigation.toggleDrawer()}
                />
            ) : (
                <Appbar.BackAction onPress={() => navigation.goBack()} />
            )}
        </Appbar.Header>
    );
};
export { AppBar };
