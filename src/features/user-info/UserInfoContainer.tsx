import {Box} from "@mui/material";
import * as React from "react";
import {ResourceTable} from "./ResourceTable";
import H1 from "../Headings/H1";
import UserInfo from "./UserInfo";

function UserInfoContainer() {

    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>
            <H1 title='Brukerinformasjon'/>

            <UserInfo/>
            <ResourceTable/>
        </Box>
    );
}

export default UserInfoContainer;