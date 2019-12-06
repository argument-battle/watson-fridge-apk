import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ProductList } from '../../../components/ProductList';
import productStorage from '../../../services/localStorage/product';
import { NavigationEvents } from 'react-navigation';
import { ROUTE_NAMES } from '../../../constants';

function UserProductList({ navigate }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const products = await productStorage.getAll();
        setProducts(products);
    }

    const onProductPress = product => {
        const id = product?._id;
        navigate(ROUTE_NAMES.PRODUCT, { id });
    };

    return (
        <View>
            <NavigationEvents onWillFocus={getProducts} />
            <ProductList onProductPress={onProductPress} products={products} />
        </View>
    );
}

export { UserProductList };
