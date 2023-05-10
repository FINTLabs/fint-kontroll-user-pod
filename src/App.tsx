import React from 'react';
import theme from './template/theme';
import {ThemeProvider} from '@mui/material/styles';
import UsersProvider from "./context/userContext/UsersContext";
import RouteList from "./features/routes/RouteList";

function App() {

    //const {basePath} = useContext(UsersContext);
    // const [basePath, setBasePath] = useState("")
    //
    //  useEffect(() => {
    //      axios.get('api/layout/configuration')
    //          .then(value => {
    //              setBasePath(value.data.basePath);
    //          });
    //  }, [basePath])

    // console.log("basePath i app", basePath);
    return (
        <ThemeProvider theme={theme}>
            <UsersProvider>
                <RouteList/>
            </UsersProvider>
        </ThemeProvider>
    );

}

export default App;
