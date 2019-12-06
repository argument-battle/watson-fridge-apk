import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { ROUTE_NAMES } from '../../constants';
import AddProductForm from './components/AddProductForm';
import { NavigationEvents } from 'react-navigation';

function AddProductView({ navigation }) {
    function fetchProduct() {
        const barcode = navigation.getParam('barcode');
        console.log(barcode);
    }

    return (
        <View style={styles.addProductView}>
            <NavigationEvents onWillFocus={fetchProduct} />
            <Button
                mode="contained"
                onPress={() => navigation.navigate(ROUTE_NAMES.BARCODE_SCANNER)}
                icon="barcode-scan"
                style={styles.scanBarcodeButton}
            >
                Scan barcode
            </Button>
            <AddProductForm
                barcode={navigation.getParam('barcode')}
                navigate={navigation.navigate}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    addProductView: {
        marginHorizontal: '5%'
    },
    scanBarcodeButton: {
        marginVertical: 10
    }
});

export { AddProductView };
