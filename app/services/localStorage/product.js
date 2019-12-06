import { AsyncStorage } from 'react-native';
import nanoid from 'nanoid/non-secure';

const sortByTitle = (a, b) => {
    var titleA = a.title.toUpperCase();
    var titleB = b.title.toUpperCase();
    if (titleA < titleB) {
        return -1;
    }
    if (titleA > titleB) {
        return 1;
    }
    return 0;
};

async function get(productId) {
    const products = await getAll();
    return products?.find(product => product._id === productId);
}

async function getAll() {
    try {
        const products = (await AsyncStorage.getItem('products')) || '[]';
        return JSON.parse(products);
    } catch (error) {
        console.log(error);
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
        console.log(error);
    }
}

async function removeAll() {
    try {
        await AsyncStorage.removeItem('products');
    } catch (error) {
        console.log(error);
    }
}

async function create(product) {
    try {
        const products = (await getAll()) || [];
        product._id = nanoid();
        const newProducts = [...products, product].sort(sortByTitle);
        await AsyncStorage.setItem('products', JSON.stringify(newProducts));
        return product._id;
    } catch (error) {
        console.log(error);
    }
}

async function overwrite(product) {
    try {
        const products = (await getAll()) || [];
        const filteredProducts = products.filter(e => e._id !== product._id);
        const newProducts = [...filteredProducts, product].sort(sortByTitle);
        await AsyncStorage.setItem('products', JSON.stringify(newProducts));
    } catch (error) {
        console.log(error);
    }
}

export default { get, getAll, remove, create, removeAll, overwrite };
