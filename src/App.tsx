import React, {useContext, useEffect} from 'react';
import theme from './template/theme';
import {ThemeProvider} from '@mui/material/styles';
import {Route, Routes} from 'react-router-dom';
import MainContainer from './features/main/MainContainer';
import UsersProvider, {UsersContext} from "./context/userContext/UsersContext";
import DetailsContainer from "./features/details/DetailsContainer";

function App() {

    const {basePath, getBasePath} = useContext(UsersContext);
    //const [path, setBasePath] = useState(basePath)
    //
    useEffect(() => {
        console.log(`${basePath === undefined ? "" : basePath}/brukere`)
        getBasePath();
        console.log(basePath)
    })
    return (
        <ThemeProvider theme={theme}>
            <UsersProvider>
                <Routes>
                    <Route path={`${basePath === undefined ? "" : basePath}/brukere`} element={<MainContainer/>}/>
                    <Route path={`${basePath === undefined ? "" : basePath}/brukere/info/:id`}
                           element={<DetailsContainer/>}/>
                </Routes>
            </UsersProvider>
        </ThemeProvider>
    )

}

export default App;
