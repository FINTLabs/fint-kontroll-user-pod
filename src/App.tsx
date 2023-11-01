import React from 'react';
import theme from './template/theme';
import {ThemeProvider} from '@mui/material/styles';
import RouteList from "./features/routes/RouteList";
import {BasePathProvider} from "./context/BasePathContext";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <BasePathProvider>

                <RouteList/>
            </BasePathProvider>
        </ThemeProvider>
    );

}

export default App;
