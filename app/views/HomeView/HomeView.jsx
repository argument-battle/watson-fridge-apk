import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB, Colors } from 'react-native-paper';
import { ProductList } from '../../components/ProductList';
import { ROUTE_NAMES } from '../../constants';

const HomeView = ({ navigation }) => {
    const onProductPress = product => {
        const id = product?._id;
        navigation.navigate(ROUTE_NAMES.PRODUCT, { id });
    };

    return (
        <View style={styles.home}>
            <ProductList {...{ onProductPress }} />
            <FAB
                style={styles.fab}
                color={Colors.white}
                icon="plus"
                onPress={() => navigation.navigate(ROUTE_NAMES.ADDP_RODUCT)}
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
