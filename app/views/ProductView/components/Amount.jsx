import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { EditAmountModal } from './EditAmountModal';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    label: {
        fontSize: 22,
        fontWeight: '500'
    }
});

const Amount = ({ amount, setAmount }) => {
    const [isModalOpen, setIsModalOpen] = useState(amount);

    const handleOpen = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.label}>{`Kiekis`}</Text>
                <IconButton icon="pencil" color={Colors.grey700} size={30} onPress={handleOpen} />
            </View>
            {isModalOpen && (
                <EditAmountModal {...{ initialAmount: amount, setIsModalOpen, setAmount }} />
            )}
        </>
    );
};

export { Amount };
