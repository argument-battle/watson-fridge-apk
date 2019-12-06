import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Colors } from 'react-native-paper';
import { ProductChipsContainer } from './components/ProductChipsContainer';
import { ROUTE_NAMES } from '../../constants';
import { Linking } from 'expo';
import productStorage from '../../services/localStorage/product';

const styles = StyleSheet.create({
    container: {
        padding: 30
    },
    chipsContainer: {
        marginBottom: 50,
        minHeight: 50
    },
    button: {
        alignSelf: 'flex-start'
    }
});

const RecipeSearchView = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [includedProducts, setIncludedProducts] = useState([]);
    const [excludedProducts, setExcludedProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    async function getProducts() {
        const products = await productStorage.getAll();
        setProducts(products);
    }

    const removeFromArray = (arr, item) => {
        return arr.filter(_item => _item._id !== item._id);
    };

    const includeProduct = useCallback(
        product => {
            setIncludedProducts([...includedProducts, product]);
        },
        [setIncludedProducts, includedProducts]
    );

    const excludeProduct = useCallback(
        product => {
            setExcludedProducts([...excludedProducts, product]);
        },
        [setExcludedProducts, excludedProducts]
    );

    const removeIncludedProduct = useCallback(
        product => {
            setIncludedProducts(removeFromArray(includedProducts, product));
        },
        [setIncludedProducts, includedProducts]
    );

    const removeExludedProduct = useCallback(
        product => {
            setExcludedProducts(removeFromArray(excludedProducts, product));
        },
        [setExcludedProducts, excludedProducts]
    );

    const searchRecipes = () => {
        const includedValues = includedProducts.map(e => e.type).join(',');
        const excludedValues = excludedProducts.map(e => e.type).join(',');

        const mainUrl = 'https://www.allrecipes.com/search/results/';
        Linking.openURL(`${mainUrl}?ingIncl=${includedValues}&ingExcl=${excludedValues}&sort=re`);
    };

    const getRemainingProducts = () => {
        const selectedProductsIds = [...includedProducts, ...excludedProducts].map(
            product => product._id
        );
        return products.filter(product => !selectedProductsIds.includes(product._id));
    };

    return (
        <ScrollView style={styles.container}>
            <Button
                style={styles.button}
                icon="plus-circle"
                color={Colors.green600}
                onPress={() =>
                    navigation.navigate(ROUTE_NAMES.SELECT_PRODUCT, {
                        includeProduct,
                        products: getRemainingProducts()
                    })
                }
            >
                Include ingredients
            </Button>
            <ProductChipsContainer
                style={styles.chipsContainer}
                products={includedProducts}
                onRemove={removeIncludedProduct}
            />
            <Button
                style={styles.button}
                icon="plus-circle"
                color={Colors.red400}
                onPress={() =>
                    navigation.navigate(ROUTE_NAMES.SELECT_PRODUCT, {
                        excludeProduct,
                        products: getRemainingProducts()
                    })
                }
            >
                Exclude ingredients
            </Button>
            <ProductChipsContainer
                style={styles.chipsContainer}
                products={excludedProducts}
                onRemove={removeExludedProduct}
            />
            <Button icon="magnify" mode="contained" onPress={searchRecipes}>
                Search
            </Button>
        </ScrollView>
    );
};

export { RecipeSearchView };
