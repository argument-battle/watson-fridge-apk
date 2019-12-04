import productStorage from '../services/localStorage/product';

const productList = [
    { title: 'Apelsinai', weight: 500, expiryDate: new Date(2019, 11, 13) },
    { title: 'Obuoliai', amount: 3, expiryDate: new Date(2019, 11, 12) },
    { title: 'Bananai', amount: 1, expiryDate: new Date(2019, 11, 11) },
    { title: 'Morkos', amount: 1, expiryDate: new Date(2019, 11, 10) },
    { title: 'Pienas', capacity: 900, expiryDate: new Date(2019, 11, 4) },
    { title: 'Pomidorų Padažas', weight: 490, expiryDate: new Date(2019, 11, 8) },
    { title: 'Šokoladas "Milka"', amount: 1, expiryDate: new Date(2019, 11, 6) },
    { title: 'Krevetės', weight: 350, expiryDate: new Date(2019, 11, 4) }
];

const loadTestData = async () => {
    for (const product of productList) {
        await productStorage.set(product);
    }
};
export { loadTestData };
