import React from 'react';
import theme from './template/theme';
import {ThemeProvider} from '@mui/material/styles';
import UsersProvider from "./context/userContext/UsersContext";
import RouteList from "./features/routes/RouteList";
import {BasePathProvider} from "./context/BasePathContext";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <BasePathProvider>
            <UsersProvider>
                <RouteList/>
            </UsersProvider>
            </BasePathProvider>
        </ThemeProvider>
    );

}

export default App;
