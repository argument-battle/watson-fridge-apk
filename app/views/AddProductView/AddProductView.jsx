import React from 'react';
import { View } from 'react-native';
import AddProductForm from './components/AddProductForm';
import { ROUTE_NAMES } from '../../constants';

function AddProductView({ navigation }) {
    const onSuccess = () => {
        navigation.navigate(ROUTE_NAMES.HOME);
    };
    return (
        <View>
            <AddProductForm {...{ onSuccess }} />
        </View>
    );
}

export { AddProductView };
