import React from 'react';
import theme from './template/theme';
import {ThemeProvider} from '@mui/material/styles';
import UsersProvider from "./context/userContext/UsersContext";
import RouteList from "./features/routes/RouteList";
import {OrgUnitsProvider} from "./context/unitContext/OrgUnitContext";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <UsersProvider>
                <OrgUnitsProvider>
                    <RouteList/>
                </OrgUnitsProvider>
            </UsersProvider>
        </ThemeProvider>
    );

}

export default App;
