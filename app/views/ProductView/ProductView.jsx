import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ProductView = ({ navigation }) => {
    const title = navigation.getParam('title', 'No title provided');
    const description = navigation.getParam('description', 'No description provided');
    const expiryDate = navigation.getParam('expiryDate', 'No date provided');

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
            <Text style={styles.detail}>{`${description}`}</Text>
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
