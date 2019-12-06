import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Portal, Dialog, Button, TextInput, HelperText, Colors } from 'react-native-paper';

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'transparent'
    }
});

const EditAmountModal = ({ initialAmount, setIsModalOpen, setAmount }) => {
    const [_amount, _setAmount] = useState(initialAmount.toString());
    const [isValid, setIsValid] = useState(true);

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleSave = () => {
        if (_amount.length > 0) {
            setIsModalOpen(false);
            setAmount(parseInt(_amount, 10));
        } else {
            setIsValid(false);
        }
    };

    return (
        <Portal>
            <Dialog visible={true} onDismiss={handleCancel}>
                <Dialog.Title>Edit amount</Dialog.Title>
                <Dialog.Content>
                    <TextInput
                        type="flat"
                        label="Amount"
                        value={_amount}
                        keyboardType="numeric"
                        onChangeText={text => _setAmount(text)}
                        error={!isValid}
                        style={styles.textInput}
                    />
                    <HelperText type="error" visible={!isValid}>
                        {'Cannot be blank.'}
                    </HelperText>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={handleCancel}>Cancel</Button>
                    <Button color={Colors.green400} onPress={handleSave}>
                        Save
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

export { EditAmountModal };
