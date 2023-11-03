import {Box} from "@mui/material";
import * as React from "react";
import style from "../../template/style";
import UsersProvider from "../../context/userContext";
import { useBasePath } from '../../context/BasePathContext';
import DetailsContainer from "./DetailsContainer";

function DetailsTempContainer() {
    const basePath = useBasePath() || '';

    return (
        <Box sx={style.content}>
            <Box sx={style.table}>
                <UsersProvider basePath={basePath}>
                    <DetailsContainer/>
                </UsersProvider>
            </Box>
        </Box>
    );
}

export default DetailsTempContainer;