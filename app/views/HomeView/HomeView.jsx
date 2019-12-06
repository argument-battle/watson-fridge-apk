import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, Colors } from 'react-native-paper';
import { UserProductList } from './components/UserProductList';
import { ROUTE_NAMES } from '../../constants';

const HomeView = ({ navigation }) => {
    return (
        <View style={styles.home}>
            <UserProductList navigate={navigation.navigate} />
            <FAB
                style={styles.fab}
                color={Colors.white}
                icon="plus"
                onPress={() => navigation.navigate(ROUTE_NAMES.ADD_PRODUCT)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    home: {
        flex: 1
    },
    fab: {
        backgroundColor: '#3cb371',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        alignSelf: 'flex-end'
    }
});

export { HomeView };
