import React, {useEffect, useState} from 'react';
import theme from './template/theme';
import {ThemeProvider} from '@mui/material/styles';
import {Route, Routes} from 'react-router-dom';
import MainContainer from './features/main/MainContainer';
import UsersProvider from "./context/userContext/UsersContext";
import DetailsContainer from "./features/details/DetailsContainer";
import axios from "axios";

function App() {

    //const {basePath} = useContext(UsersContext);
    const [basePath, setBasePath] = useState("")

    useEffect(() => {
        axios.get('api/layout/configuration')
            .then(value => {
                setBasePath(value.data.basePath);
            });
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <UsersProvider>
                <Routes>
                    <Route path={`${basePath}/brukere`} element={<MainContainer/>}/>
                    <Route path={`${basePath}/brukere/info/:id`} element={<DetailsContainer/>}/>
                </Routes>
            </UsersProvider>
        </ThemeProvider>
    );
}

export default App;
