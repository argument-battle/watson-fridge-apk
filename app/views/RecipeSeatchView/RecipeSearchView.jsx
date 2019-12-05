import React, { useState, useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, Colors } from 'react-native-paper';
import { ProductChipsContainer } from './components/ProductChipsContainer';
import { ROUTE_NAMES } from '../../constants';
import { Linking } from 'expo';

const styles = StyleSheet.create({
    conatainer: {
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
    const [includedProducts, setIncludedProducts] = useState([]);
    const includeProduct = useCallback(
        product => {
            setIncludedProducts([...includedProducts, product]);
        },
        [setIncludedProducts, includedProducts]
    );

    const [excludedProducts, setExcludedProducts] = useState([]);
    const excludeProduct = useCallback(
        product => {
            setExcludedProducts([...excludedProducts, product]);
        },
        [setExcludedProducts, excludedProducts]
    );

    const selectedProducts = [...includedProducts, ...excludedProducts];

    const remove = (arr, setter) => value => {
        setter(arr.filter(e => e._id !== value._id));
    };

    const searchRecipes = () => {
        const includedValues = includedProducts.map(e => e.type).join(',');
        const excludedValues = excludedProducts.map(e => e.type).join(',');

        const mainUrl = 'https://www.allrecipes.com/search/results/';
        Linking.openURL(`${mainUrl}?ingIncl=${includedValues}&ingExcl=${excludedValues}&sort=re`);
    };

    return (
        <ScrollView style={styles.conatainer}>
            <Button
                style={styles.button}
                icon="plus-circle"
                color={Colors.green600}
                onPress={() =>
                    navigation.navigate(ROUTE_NAMES.SELECT_PRODUCT, {
                        includeProduct,
                        selectedProducts
                    })
                }
            >
                Include ingredients
            </Button>
            <ProductChipsContainer
                style={styles.chipsContainer}
                products={includedProducts}
                onRemove={remove(includedProducts, setIncludedProducts)}
            />
            <Button
                style={styles.button}
                icon="plus-circle"
                color={Colors.red400}
                onPress={() =>
                    navigation.navigate(ROUTE_NAMES.SELECT_PRODUCT, {
                        excludeProduct,
                        selectedProducts
                    })
                }
            >
                Exclude ingredients
            </Button>
            <ProductChipsContainer
                style={styles.chipsContainer}
                products={excludedProducts}
                onRemove={remove(excludedProducts, setExcludedProducts)}
            />
            <Button icon="magnify" mode="contained" onPress={searchRecipes}>
                Search
            </Button>
        </ScrollView>
    );
};

export { RecipeSearchView };
