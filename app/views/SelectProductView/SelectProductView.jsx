import React from 'react';
import { View } from 'react-native';
import { ProductList } from '../../components/ProductList';

const SelectProductView = ({ navigation }) => {
    const { getParam, goBack } = navigation;

    const exludedProducts = getParam('selectedProducts');
    const includeProduct = getParam('includeProduct');
    const excludeProduct = getParam('excludeProduct');

    const onProductPress = product => {
        if (includeProduct) {
            includeProduct(product);
            goBack();
        } else if (excludeProduct) {
            excludeProduct(product);
            goBack();
        }
    };

    return (
        <View>
            <ProductList {...{ onProductPress, exludedProducts }} />
        </View>
    );
};

export { SelectProductView };
