import React from 'react';
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@mui/styles";
import {Routes, Route} from 'react-router-dom';
import FindUserContainer from './features/users/FindUserContainer'
import UsersProvider from "./context/userContext/UsersContext";

const theme = createTheme({
    palette: {
        secondary: {
            light: '#7fb434',
            main: '#5FA202',
            dark: '#427101',
        },
        primary: {
            light: '#4b727a',
            main: '#1F4F59',
            dark: '#15373e',
        },
    },
    spacing: 8,
    typography: {
        fontFamily: [
            "Nunito Sans", 'sans-serif'
        ].join(',')
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <UsersProvider>
                <Routes>
                    <Route path="/" element={<FindUserContainer/>}/>
                </Routes>
            </UsersProvider>
        </ThemeProvider>
    );
}

export default App;
