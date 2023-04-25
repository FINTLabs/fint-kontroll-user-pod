import {Box} from "@mui/material";
import {UserTable} from "./UserTable";
import * as React from "react";
import style from "../../template/style";

function MainContainer() {

    return (
        <Box sx={style.content}>
            <Box sx={style.table}>
                <UserTable/>
            </Box>
        </Box>
    );
}

export default MainContainer;