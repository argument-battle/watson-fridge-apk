import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Navigator } from './app/Navigator';
import { theme } from './app/Theme';

const App = () => (
    <PaperProvider theme={theme}>
        <Navigator />
    </PaperProvider>
);

export default App;
