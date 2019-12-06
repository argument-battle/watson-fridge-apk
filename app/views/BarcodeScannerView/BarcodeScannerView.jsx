import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { ROUTE_NAMES } from '../../constants';

function BarcodeScannerView({ navigation }) {
    const [cameraPermission, setCameraPermission] = useState(null);
    const [camera, setCamera] = useState(false);

    useEffect(() => {
        openBarcodeScanner();
    }, []);

    async function openBarcodeScanner() {
        if (!cameraPermission) {
            await getCameraPermission();
        } else {
            cameraPermission(true);
        }
        setCamera(true);
    }

    async function getCameraPermission() {
        const { status: currentStatus } = await Permissions.getAsync(Permissions.CAMERA);

        if (currentStatus !== 'granted') {
            const { status: incomingStatus } = await Permissions.askAsync(Permissions.CAMERA);
            if (incomingStatus === 'granted') {
                await setCameraPermission(incomingStatus === 'granted');
            } else {
                navigation.navigate(ROUTE_NAMES.ADD_PRODUCT);
            }
        } else {
            setCameraPermission(true);
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {camera && cameraPermission && (
                <BarCodeScanner
                    onBarCodeScanned={({ data }) =>
                        navigation.navigate(ROUTE_NAMES.ADD_PRODUCT, { barcode: data })
                    }
                    style={StyleSheet.absoluteFillObject}
                />
            )}
        </View>
    );
}

export { BarcodeScannerView };
