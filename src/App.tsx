import React from 'react';
import {createTheme} from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import {Routes, Route} from 'react-router-dom';
import MainContainer from './features/main/MainContainer';
import UsersProvider from "./context/userContext/UsersContext";
import DetailsContainer from "./features/details/DetailsContainer";

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
                    <Route path="/" element={<MainContainer/>}/>
                    <Route path="/info/:id" element={<DetailsContainer/>}/>
                </Routes>
            </UsersProvider>
        </ThemeProvider>
    );
}

export default App;
