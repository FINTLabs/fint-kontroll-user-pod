import * as React from "react";
import UsersProvider from "../../context/userContext";
import { useBasePath } from '../../context/BasePathContext';
import DetailsContainer from "./DetailsContainer";

function DetailsTempContainer() {
    const basePath = useBasePath() || '';

    return (
        <>
                <UsersProvider basePath={basePath}>
                    <DetailsContainer/>
                </UsersProvider>
        </>
    );
}

export default DetailsTempContainer;