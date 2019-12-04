import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, IconButton, Colors } from 'react-native-paper';
import { ROUTE_NAMES } from '../../constants';

const styles = StyleSheet.create({
    content: {
        alignItems: 'flex-start'
    }
});

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
            <Appbar.Content title={routeName} style={styles.content} />
        </Appbar.Header>
    );
};
export { AppBar };
