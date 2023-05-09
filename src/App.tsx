import React, {useContext} from 'react';
import theme from './template/theme';
import {ThemeProvider} from '@mui/material/styles';
import {Route, Routes} from 'react-router-dom';
import MainContainer from './features/main/MainContainer';
import UsersProvider, {UsersContext} from "./context/userContext/UsersContext";
import DetailsContainer from "./features/details/DetailsContainer";

function App() {

    const {basePath} = useContext(UsersContext);
    // const [basePath, setBasePath] = useState(undefined)
    //
    // useEffect(() => {
    //     axios.get('api/layout/configuration')
    //         .then(value => {
    //             setBasePath(value.data.basePath);
    //         });
    // }, [])

    console.log("basePath", basePath);
    return basePath ?
        (
            <ThemeProvider theme={theme}>
                <UsersProvider>
                    <Routes>
                        <Route path={`${basePath}/brukere`} element={<MainContainer/>}/>
                        <Route path={`${basePath}/brukere/info/:id`} element={<DetailsContainer/>}/>
                    </Routes>
                </UsersProvider>
            </ThemeProvider>
        )
        : <div/>
}

export default App;
