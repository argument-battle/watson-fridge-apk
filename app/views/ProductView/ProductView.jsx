import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import productStorage from '../../services/localStorage/product';

const ProductView = ({ navigation }) => {
    const id = navigation.getParam('id', '');
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct(id);
    }, [id]);

    async function getProduct(id) {
        const product = await productStorage.get(id);
        setProduct(product);
    }

    const { title, amount } = product;
    const expiryDate = new Date(product.expiryDate);
    const day = expiryDate.getDate();
    const month = expiryDate.getMonth() + 1;
    const year = expiryDate.getFullYear();

    return (
        <View style={styles.product}>
            <Text id="title" style={styles.title}>
                {title}
            </Text>
            <Text style={styles.label}>{'Galioja iki'}</Text>
            <Text style={styles.detail}>{`${year}-${month}-${day}`}</Text>
            <Text style={styles.label}>{`Kiekis`}</Text>
            <Text style={styles.detail}>{`${amount}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        marginLeft: 16
    },
    title: {
        fontSize: 38,
        fontWeight: '500'
    },
    label: {
        fontSize: 22,
        fontWeight: '500'
    },
    detail: {
        fontSize: 16,
        marginBottom: 5
    }
});

export { ProductView };
