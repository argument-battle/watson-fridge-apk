import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

const TRESHOLD = {
    EXPIRY_POINT: 1,
    FRESH_POINT: 7
};

const setColorBasedOnExpiryDate = expiryDate => {
    const ONE_DAY = 1000 * 60 * 60 * 24;
    const diffInMs = Math.round(expiryDate.getTime() - new Date().getTime());
    const daysTillExpiry = Math.round(diffInMs / ONE_DAY);

    if (daysTillExpiry <= TRESHOLD.EXPIRY_POINT) return '#f40b42';

    if (daysTillExpiry < TRESHOLD.FRESH_POINT) return '#ffd300';

    return '#3cb371';
};

const ProductListItem = ({ product = {}, onPress = () => {} }) => {
    const { _id, title, expiryDate: _expiryDate, amount, measurement } = product;
    const expiryDate = new Date(_expiryDate);
    return (
        <List.Item
            title={title}
            description={`${amount} ${measurement}`}
            left={props => (
                <List.Icon {...props} color={setColorBasedOnExpiryDate(expiryDate)} icon="clock" />
            )}
            style={styles.listItem}
            onPress={() => onPress(product)}
        />
    );
};

const styles = StyleSheet.create({
    listItem: {
        borderBottomWidth: 1,
        borderColor: '#dedfe0'
    }
});

export { ProductListItem };
