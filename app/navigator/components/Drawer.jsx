import React from 'react';
import { SafeAreaView, Image, StyleSheet, View } from 'react-native';
import { Drawer as PaperDrawer } from 'react-native-paper';
import GlobalStyles from '../../modules/GlobalStyles';
import { ROUTE_NAMES } from '../../constants';
import { primaryColor } from '../../Theme';
import logo from '../../assets/logoAlpha.png';

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
                label="Receptai"
                icon="chef-hat"
                onPress={() => console.log('pressed receptai')}
            />
        </SafeAreaView>
    );
};
export { Drawer };
