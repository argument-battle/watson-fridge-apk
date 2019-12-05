import React from 'react';
import { SafeAreaView, Image, StyleSheet, View } from 'react-native';
import { Drawer as PaperDrawer } from 'react-native-paper';
import GlobalStyles from '../../modules/GlobalStyles';
import { ROUTE_NAMES } from '../../constants';
import { primaryColor } from '../../Theme';
import logo from '../../assets/logoAlpha.png';
import { loadTestData } from '../../modules/TestDataLoader';
import productStorage from '../../services/localStorage/product';

const styles = StyleSheet.create({
    conatainer: {
        flex: 1
    },
    logoContainer: {
        maxHeight: 100,
        backgroundColor: primaryColor,
        flex: 1,
        padding: 10
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain',
        marginLeft: -120
    }
});

const Drawer = ({ navigation }) => {
    const { navigate } = navigation;
    return (
        <SafeAreaView style={[GlobalStyles.AndroidSafeArea, styles.conatainer]}>
            <View style={styles.logoContainer}>
                <Image style={styles.image} source={logo} />
            </View>
            <PaperDrawer.Item
                label={ROUTE_NAMES.HOME}
                icon="home"
                onPress={() => navigate(ROUTE_NAMES.HOME)}
            />
            <PaperDrawer.Item
                label={ROUTE_NAMES.RECIPE_SEARTCH}
                icon="chef-hat"
                onPress={() => navigate(ROUTE_NAMES.RECIPE_SEARTCH)}
            />
            {__DEV__ && (
                <PaperDrawer.Section title="DEV: Storage">
                    <PaperDrawer.Item
                        label="Load test data"
                        icon="test-tube"
                        onPress={() => loadTestData()}
                    />
                    <PaperDrawer.Item
                        label="Log product storage"
                        icon="test-tube-empty"
                        onPress={async () => console.log(await productStorage.getAll())}
                    />
                    <PaperDrawer.Item
                        label="Delete test data"
                        icon="test-tube-off"
                        onPress={async () => await productStorage.removeAll()}
                    />
                </PaperDrawer.Section>
            )}
        </SafeAreaView>
    );
};
export { Drawer };
