import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IconButton, Colors, Portal, Dialog, Button, Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
    title: {
        fontSize: 38,
        fontWeight: '500',
        maxWidth: '90%'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    }
});

const Title = ({ title, onRemoveProduct }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <View style={styles.container}>
                <Text id="title" style={styles.title}>
                    {title}
                </Text>
                <IconButton
                    icon="trash-can"
                    color={Colors.red500}
                    size={30}
                    onPress={() => setIsModalOpen(true)}
                />
            </View>
            <Portal>
                <Dialog visible={isModalOpen} onDismiss={() => setIsModalOpen(false)}>
                    <Dialog.Title>Delete product</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Are you sure you want to delete {title} ?</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button color={Colors.red600} onPress={onRemoveProduct}>
                            Delete
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </>
    );
};
export { Title };
