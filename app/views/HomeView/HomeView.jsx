import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { FAB, Colors } from 'react-native-paper';
import ProductListItem from '../HomeView/components/ProductListItem';

const HomeView = props => {
    const testProductList = [
        { title: 'Apelsinai', amount: '500 g', expiryDate: new Date(2019, 11, 13) },
        { title: 'Obuoliai', amount: '450 g', expiryDate: new Date(2019, 11, 12) },
        { title: 'Bananai', amount: '1 kg', expiryDate: new Date(2019, 11, 11) },
        { title: 'Morkos', amount: '1 kg', expiryDate: new Date(2019, 11, 10) },
        { title: 'Pienas', amount: '900 ml', expiryDate: new Date(2019, 11, 4) },
        {
            title: 'Pomidorų Padažas',
            amount: '490 g',
            expiryDate: new Date(2019, 11, 8)
        },
        {
            title: 'Šokoladas "Milka"',
            amount: '100 g',
            expiryDate: new Date(2019, 11, 6)
        },
        { title: 'Krevetės', amount: '350 g.', expiryDate: new Date(2019, 11, 4) }
    ];

    return (
        <View>
            <FlatList
                keyExtractor={item => item.title}
                data={testProductList}
                renderItem={({ item }) => (
                    <ProductListItem
                        title={item.title}
                        description={item.amount}
                        expiryDate={item.expiryDate}
                        {...props}
                    />
                )}
            />
            <FAB
                style={styles.fab}
                color={Colors.white}
                icon="plus"
                onPress={() => console.log('Pressed')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    fab: {
        backgroundColor: '#3cb371',
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0
    }
});

export { HomeView };
