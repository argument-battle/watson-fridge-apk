import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import productStorage from '../../services/localStorage/product';
import { ROUTE_NAMES } from '../../constants';

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

    const remove = async () => {
        await productStorage.remove(id);
        navigation.navigate(ROUTE_NAMES.HOME);
    };

    const handleTrash = async () => {
        Alert.alert(
            'Delete product',
            `Are you sure you want to delete ${title} ?`,
            [
                {
                    text: 'Cancel',
                    onPress: () => {},
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: remove,
                    style: 'destructive'
                }
            ],
            { cancelable: false }
        );
    };

    const expiryDate = new Date(product.expiryDate);
    const day = expiryDate.getDate();
    const month = expiryDate.getMonth() + 1;
    const year = expiryDate.getFullYear();

    return (
        <View style={styles.product}>
            <View style={styles.topRow}>
                <Text id="title" style={styles.title}>
                    {title}
                </Text>
                <IconButton
                    icon="trash-can"
                    color={Colors.red500}
                    size={30}
                    onPress={handleTrash}
                />
            </View>
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
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export { ProductView };
