import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, HelperText, Colors } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { Dropdown } from 'react-native-material-dropdown';
import { PRODUCT_TYPES, MEASURING_UNITS } from '../../../constants';
import { theme } from '../../../Theme';
import productStorage from '../../../services/localStorage/product';

const productTypes = Object.entries(PRODUCT_TYPES).map(([, value]) => ({
    value: formatProductTypeText(value)
}));
const measurements = Object.entries(MEASURING_UNITS).map(([, value]) => ({ value }));

function formatProductTypeText(text) {
    return `  ${text[0].toUpperCase() + text.slice(1)}`;
}

function isDateGreaterThanToday(date) {
    const currentDate = new Date();
    const givenDate = parseDate(date);

    if (givenDate > currentDate) {
        return true;
    } else {
        return false;
    }
}

function parseDate(dateString) {
    const dateParts = dateString.split('/');
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}

export default function AddProductForm({ onSuccess }) {
    const [inputs, setInputs] = useState({
        title: {
            value: '',
            error: ''
        },
        expiryDate: {
            value: '',
            error: ''
        },
        amount: {
            value: '',
            error: ''
        },
        measurement: {
            value: '' || MEASURING_UNITS.WEIGHT,
            error: ''
        },
        type: {
            value: '',
            error: ''
        }
    });
    const { title, expiryDate, amount, measurement, type } = inputs;
    let expiryDateField;

    function handleInputChange(inputName, value) {
        inputs[inputName].error = '';
        inputs[inputName].value = value;
        setInputs({ ...inputs });
    }

    async function handleFormSubmit() {
        if (validateForm()) {
            await saveNewProduct();
            onSuccess();
        }
    }

    async function saveNewProduct() {
        const productId = await productStorage.set({
            title: title.value,
            amount: amount.value,
            type: type.value,
            expiryDate: parseDate(expiryDate.value),
            measurement: measurement.value
        });
        return productId;
    }

    function validateForm() {
        const isExpiryValid = validateExpiryDate();
        const areRequiredInputsValid = validateRequiredInputs();

        if (!isExpiryValid || !areRequiredInputsValid) {
            return false;
        }
        return true;
    }

    function validateRequiredInputs() {
        let isValid = true;
        Object.entries(inputs).forEach(([key, item]) => {
            if (!item.value) {
                inputs[key].error = 'Cannot be blank.';
                isValid = false;
            }
        });
        setInputs({ ...inputs });
        return isValid;
    }

    function validateExpiryDate() {
        let isValid = true;
        if (expiryDateField.isValid() && isDateGreaterThanToday(expiryDate.value)) {
            inputs.expiryDate.error = '';
        } else {
            inputs.expiryDate.error = 'Wrong date format.';
            isValid = false;
        }
        setInputs({ ...inputs });
        return isValid;
    }

    return (
        <View style={styles.form}>
            <View>
                <TextInput
                    text={title.value}
                    label="Title"
                    onChangeText={text => handleInputChange('title', text)}
                    error={title.error}
                    style={styles.textInput}
                />
                <HelperText type="error" visible={title.error}>
                    {title.error}
                </HelperText>
            </View>
            <View>
                <TextInput
                    text={expiryDate.value}
                    label="Expiration date"
                    style={styles.textInput}
                    onChangeText={text => handleInputChange('expiryDate', text)}
                    error={expiryDate.error}
                    render={props => (
                        <TextInputMask
                            {...props}
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY'
                            }}
                            ref={ref => (expiryDateField = ref)}
                        />
                    )}
                />
                <HelperText type="error" visible={expiryDate.error}>
                    {expiryDate.error}
                </HelperText>
            </View>
            <View style={styles.amountGroup}>
                <View flex={1}>
                    <TextInput
                        label="Amount"
                        text={amount.value}
                        style={styles.textInput}
                        keyboardType="numeric"
                        onChangeText={text => handleInputChange('amount', text)}
                        error={amount.error}
                    />
                    <HelperText type="error" visible={amount.error}>
                        {amount.error}
                    </HelperText>
                </View>
                <Dropdown
                    value={measurement.value}
                    containerStyle={[styles.amountPicker, styles.dowpdown]}
                    data={measurements}
                    inputContainerStyle={{ borderBottomWidth: 1, marginTop: 1.5 }}
                    baseColor={theme.colors.disabled}
                    onChangeText={unit => handleInputChange('measurement', unit)}
                />
            </View>
            <View>
                <Dropdown
                    label="   Type"
                    value={type.value}
                    baseColor={type.error ? theme.colors.error : theme.colors.disabled}
                    inputContainerStyle={{ borderBottomWidth: 1 }}
                    data={productTypes}
                    onChangeText={text => handleInputChange('type', text)}
                />
                <HelperText type="error" visible={type.error} style={{ marginTop: -8 }}>
                    {type.error}
                </HelperText>
            </View>
            <Button
                mode="contained"
                onPress={handleFormSubmit}
                color={Colors.green600}
                style={styles.submitButton}
            >
                Add product
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    amountGroup: { flexDirection: 'row', alignItems: 'flex-start' },
    form: {
        marginHorizontal: '5%'
    },
    amountPicker: {
        width: 60,
        height: '100%'
    },
    dowpdown: {
        borderColor: 'red'
    },
    textInput: {
        backgroundColor: 'transparent'
    },
    submitButton: {
        marginTop: 20
    }
});
