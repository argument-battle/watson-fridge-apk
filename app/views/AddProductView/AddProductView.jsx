import React from 'react';
import { View } from 'react-native';
import AddProductForm from './components/AddProductForm';

function AddProductView(props) {
    return (
        <View>
            <AddProductForm navigation={props.navigation} />
        </View>
    );
}

export { AddProductView };
