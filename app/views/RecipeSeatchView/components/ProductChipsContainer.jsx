import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip, Colors } from 'react-native-paper';

const styles = StyleSheet.create({
    chipBox: {
        height: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: Colors.grey500,
        overflow: 'scroll'
    },
    chip: {
        alignSelf: 'flex-start',
        marginTop: 4,
        marginLeft: 4,
        padding: 2
    },
    button: {
        alignSelf: 'flex-start'
    }
});

const ProductChipsContainer = ({ products = [], onRemove = () => {}, style }) => {
    return (
        <View style={[styles.chipBox, style]}>
            {products.map((e, i) => (
                <Chip key={i} style={styles.chip} mode="flat" onClose={() => onRemove(e)}>
                    {e.title}
                </Chip>
            ))}
        </View>
    );
};

export { ProductChipsContainer };
