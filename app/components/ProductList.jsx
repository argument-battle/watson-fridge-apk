import React from 'react';
import { View, FlatList } from 'react-native';
import { ProductListItem } from './ProductListItem';

const ProductList = ({ onProductPress = () => {}, products = [] }) => {
    return (
        <View>
            <FlatList
                keyExtractor={item => item._id}
                data={products}
                renderItem={({ item }) => (
                    <ProductListItem product={item} onPress={onProductPress} />
                )}
            />
        </View>
    );
};

export { ProductList };
