import productStorage from '../services/localStorage/product';
import { PRODUCT_TYPES } from '../constants';

const productList = [
    {
        title: 'Apelsinai',
        amount: 5,
        type: PRODUCT_TYPES.ORANGE,
        expiryDate: new Date(2019, 11, 13),
        measurement: 'qnt.'
    },
    {
        title: 'Obuoliai',
        amount: 3,
        type: PRODUCT_TYPES.APPLE,
        expiryDate: new Date(2019, 11, 12),
        measurement: 'qnt.'
    },
    {
        title: 'Bananai',
        amount: 1,
        type: PRODUCT_TYPES.BANANA,
        expiryDate: new Date(2019, 11, 11),
        measurement: 'qnt.'
    },
    {
        title: 'Morkos',
        amount: 1,
        type: PRODUCT_TYPES.CARROT,
        expiryDate: new Date(2019, 11, 10),
        measurement: 'qnt.'
    },
    {
        title: 'Pienas',
        amount: 900,
        type: PRODUCT_TYPES.MILK,
        expiryDate: new Date(2019, 11, 4),
        measurement: 'ml.'
    },
    {
        title: 'Pomidorų Padažas',
        amount: 500,
        type: PRODUCT_TYPES.TOMATO_SAUCE,
        expiryDate: new Date(2019, 11, 8),
        measurement: 'g.'
    },
    {
        title: 'Šokoladas "Milka"',
        amount: 1,
        type: PRODUCT_TYPES.CHOCOLATE,
        expiryDate: new Date(2019, 11, 6),
        measurement: 'qnt.'
    },
    {
        title: 'Krevetės',
        amount: 350,
        type: PRODUCT_TYPES.SHRIMP,
        expiryDate: new Date(2019, 11, 4),
        measurement: 'g.'
    }
];

const loadTestData = async () => {
    for (const product of productList) {
        await productStorage.set(product);
    }
};
export { loadTestData };
