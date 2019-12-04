import { AsyncStorage } from 'react-native';
import nanoid from 'nanoid/non-secure';

async function get(productId) {
    const products = await getAll();
    return products?.find(product => product._id === productId);
}

async function getAll() {
    try {
        const products = (await AsyncStorage.getItem('products')) || '[]';
        return JSON.parse(products);
    } catch (error) {
        console.error(error);
    }
}

async function remove(productId) {
    try {
        const products = (await getAll()) || [];
        await AsyncStorage.setItem(
            'products',
            JSON.stringify(products.filter(product => product._id !== productId))
        );
    } catch (error) {
        console.error(error);
    }
}

async function removeAll() {
    try {
        await AsyncStorage.removeItem('products');
    } catch (error) {
        console.error(error);
    }
}

async function set(product) {
    try {
        const products = (await getAll()) || [];
        product._id = nanoid();

        await AsyncStorage.setItem('products', JSON.stringify([...products, product]));
    } catch (error) {
        console.error(error);
    }
}

export default { get, getAll, remove, set, removeAll };
