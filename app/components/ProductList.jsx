import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { ProductListItem } from './ProductListItem';
import productStorage from '../services/localStorage/product';

const ProductList = ({ onProductPress = () => {}, exludedProducts = [] }) => {
    const [products, _setProducts] = useState([]);
    const setProducts = products => {
        let filteredProducts = products;
        exludedProducts.forEach(exluded => {
            filteredProducts = filteredProducts.filter(product => exluded._id !== product._id);
        });
        _setProducts(filteredProducts);
    };

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const products = await productStorage.getAll();
        setProducts(products);
    }
    return (
        <FlatList
            keyExtractor={item => item._id}
            data={products}
            renderItem={({ item }) => <ProductListItem product={item} onPress={onProductPress} />}
        />
    );
};

export { ProductList };
