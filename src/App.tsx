import React from 'react';
import theme from './template/theme';
import {ThemeProvider} from '@mui/material/styles';
import UsersProvider from "./context/userContext/UsersContext";
import RouteList from "./features/routes/RouteList";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <UsersProvider>
                <RouteList/>
            </UsersProvider>
        </ThemeProvider>
    );

}

export default App;
