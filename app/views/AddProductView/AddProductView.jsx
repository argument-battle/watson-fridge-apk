import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, ActivityIndicator, Text } from 'react-native-paper';
import { ROUTE_NAMES } from '../../constants';
import { AddProductForm } from './components/AddProductForm';
import { NavigationEvents } from 'react-navigation';
import { CONFIG } from '../../constants.js';
const { BACKEND_URL } = CONFIG;

const AddProductView = ({ navigation }) => {
    const { getParam, navigate } = navigation;
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedProduct, setFetchedProduct] = useState(undefined);

    const onFocus = () => {
        const barcode = getParam('barcode');
        if (barcode) {
            fetchProduct(barcode);
        }
    };

    const fetchProduct = async barcode => {
        try {
            setIsLoading(true);
            const response = await fetch(BACKEND_URL + `/products/${barcode}`);
            if (response.ok) {
                const { product } = await response.json();
                setFetchedProduct(product);
            } else {
                setFetchedProduct(null);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    const barcode = getParam('barcode');
    const defaultValues = fetchedProduct ? { ...fetchedProduct, expiryDate: '' } : null;

    return isLoading ? (
        <ActivityIndicator style={styles.spinner} size="large" animating={true} />
    ) : (
        <View style={styles.addProductView}>
            <NavigationEvents onWillFocus={onFocus} />
            <Button
                mode="contained"
                onPress={() => navigate(ROUTE_NAMES.BARCODE_SCANNER)}
                icon="barcode-scan"
                style={styles.scanBarcodeButton}
            >
                Scan barcode
            </Button>
            {fetchedProduct === null && (
                <Text>
                    Sorry, could not get data using provided barcode. Please fill in the product
                    manually
                </Text>
            )}
            <AddProductForm {...{ barcode, navigate, defaultValues }} />
        </View>
    );
};

const styles = StyleSheet.create({
    addProductView: {
        marginHorizontal: '5%'
    },
    scanBarcodeButton: {
        marginVertical: 10
    },
    spinner: {
        width: '100%',
        height: '100%'
    }
});

export { AddProductView };
