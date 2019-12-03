import { DefaultTheme } from 'react-native-paper';
//https://github.com/callstack/react-native-paper/blob/master/src/styles/DefaultTheme.tsx

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#F1C40F'
    }
};

export { theme };
