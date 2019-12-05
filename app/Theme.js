import { DefaultTheme } from 'react-native-paper';
//https://github.com/callstack/react-native-paper/blob/master/src/styles/DefaultTheme.tsx

const primaryColor = '#F1C40F';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: primaryColor,
        disabled: DefaultTheme.colors.placeholder
    }
};

export { theme, primaryColor };
