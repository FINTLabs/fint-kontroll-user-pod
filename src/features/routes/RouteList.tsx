import React, {useContext} from 'react';
import {Route, Routes} from 'react-router-dom';
import MainContainer from '../../features/main/MainContainer';
import DetailsContainer from "../../features/details/DetailsContainer";
import {UsersContext} from "../../context/userContext";

const RouteList = () => {
    const {basePath} = useContext(UsersContext);

    return (
        <Routes>
            <Route path={`${basePath}/brukere`} element={<DetailsContainer/>}/>
            <Route path={`${basePath}/brukere/info/:id`} element={<MainContainer/>}/>
        </Routes>
    )
}

export default RouteList;