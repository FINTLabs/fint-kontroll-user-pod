import {Box} from "@mui/material";
import {UserTable} from "./UserTable";
import * as React from "react";
import style from "../../template/style";
import UsersProvider from "../../context/userContext";
import { useBasePath } from '../../context/BasePathContext';

function MainContainer() {
    const basePath = useBasePath() || '';

    return (
        <Box sx={style.content}>
            <Box sx={style.table}>
                <UsersProvider basePath={basePath}>
                <UserTable/>
                </UsersProvider>
            </Box>
        </Box>
    );
}

export default MainContainer;