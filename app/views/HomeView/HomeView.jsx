import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { FAB, Colors } from 'react-native-paper';
import ProductListItem from '../HomeView/components/ProductListItem';
import productStorage from '../../services/localStorage/product';
import { ROUTE_NAMES } from '../../constants';

const HomeView = ({ navigation }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const products = await productStorage.getAll();
        setProducts(products);
    }
    return (
        <View style={styles.home}>
            <FlatList
                keyExtractor={item => item._id}
                data={products}
                renderItem={({ item }) => (
                    <ProductListItem product={item} navigation={navigation} />
                )}
            />
            <FAB
                style={styles.fab}
                color={Colors.white}
                icon="plus"
                onPress={() => navigation.navigate(ROUTE_NAMES.ADDPRODUCT)}
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
