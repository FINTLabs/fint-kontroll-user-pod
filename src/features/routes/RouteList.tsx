import React from 'react';
import {Route, Routes} from 'react-router-dom';
import MainContainer from '../../features/main/MainContainer';
import DetailsTempContainer from '../../features/details/DetailsTempContainer';
import {useBasePath} from "../../context/BasePathContext";

const RouteList = () => {
    const basePath = useBasePath() || '';

    return (
        <main>
            <Routes>
                <Route path={`${basePath}/brukere`} element={<MainContainer/>}/>
                <Route path={`${basePath}/brukere/info/:id`} element={<DetailsTempContainer/>}/>
            </Routes>
        </main>
    )
}

export default RouteList;