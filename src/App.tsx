import React from 'react';
import theme from './template/theme';
import {ThemeProvider} from '@mui/material/styles';
import {Route, Routes} from 'react-router-dom';
import MainContainer from './features/main/MainContainer';
import UsersProvider from "./context/userContext/UsersContext";
import DetailsContainer from "./features/details/DetailsContainer";

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
