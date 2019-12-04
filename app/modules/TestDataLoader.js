import productStorage from '../services/localStorage/product';
import { PRODUCT_TYPES } from '../constants';

const productList = [
    {
        title: 'Apelsinai',
        weight: 500,
        type: PRODUCT_TYPES.ORANGE,
        expiryDate: new Date(2019, 11, 13)
    },
    {
        title: 'Obuoliai',
        amount: 3,
        type: PRODUCT_TYPES.APPLE,
        expiryDate: new Date(2019, 11, 12)
    },
    {
        title: 'Bananai',
        amount: 1,
        type: PRODUCT_TYPES.BANANA,
        expiryDate: new Date(2019, 11, 11)
    },
    {
        title: 'Morkos',
        amount: 1,
        type: PRODUCT_TYPES.CARROT,
        expiryDate: new Date(2019, 11, 10)
    },
    {
        title: 'Pienas',
        capacity: 900,
        type: PRODUCT_TYPES.MILK,
        expiryDate: new Date(2019, 11, 4)
    },
    {
        title: 'Pomidorų Padažas',
        weight: 490,
        type: PRODUCT_TYPES.TOMATO_SAUCE,
        expiryDate: new Date(2019, 11, 8)
    },
    {
        title: 'Šokoladas "Milka"',
        amount: 1,
        type: PRODUCT_TYPES.CHOCOLATE,
        expiryDate: new Date(2019, 11, 6)
    },
    {
        title: 'Krevetės',
        weight: 350,
        type: PRODUCT_TYPES.SHRIMP,
        expiryDate: new Date(2019, 11, 4)
    }
];

const loadTestData = async () => {
    for (const product of productList) {
        await productStorage.set(product);
    }
};
export { loadTestData };
