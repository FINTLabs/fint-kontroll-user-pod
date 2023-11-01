import {Box} from "@mui/material";
import {UserTable} from "./UserTable";
import * as React from "react";
import style from "../../template/style";
import UsersProvider from "../../context/userContext";

function MainContainer() {

    return (
        <Box sx={style.content}>
            <Box sx={style.table}>
                <UsersProvider>
                <UserTable/>
                </UsersProvider>
            </Box>
        </Box>
    );
}

export default MainContainer;