import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import productStorage from '../../services/localStorage/product';
import { ROUTE_NAMES } from '../../constants';
import { Title } from './components/Title';
import { Amount } from './components/Amount';

const ProductView = ({ navigation }) => {
    const { getParam, navigate } = navigation;
    const id = getParam('id', '');
    const [product, setProduct] = useState({});

    const setAmount = useCallback(
        amount => {
            setProduct({ ...product, amount });
        },
        [product, setProduct]
    );

    useEffect(() => {
        getProduct(id);
    }, [id]);

    async function getProduct(id) {
        const product = await productStorage.get(id);
        setProduct(product);
    }

    const onRemoveProduct = useCallback(async () => {
        await productStorage.remove(id);
        navigate(ROUTE_NAMES.HOME);
    }, [id, navigate]);

    const { title, amount, measurement } = product;

    const expiryDate = new Date(product.expiryDate);
    const day = expiryDate.getDate();
    const month = expiryDate.getMonth() + 1;
    const year = expiryDate.getFullYear();

    return (
        <View style={styles.product}>
            <Title {...{ title, onRemoveProduct }} />
            <Text style={styles.label}>{'Galioja iki'}</Text>
            <Text style={styles.detail}>{`${year}-${month}-${day}`}</Text>
            <Amount {...{ amount, setAmount }} />
            <Text style={styles.detail}>{`${amount} ${measurement}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        marginLeft: 16
    },
    title: {
        fontSize: 38,
        fontWeight: '500',
        maxWidth: '90%'
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
