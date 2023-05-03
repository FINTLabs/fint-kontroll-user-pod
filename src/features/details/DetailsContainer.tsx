import {Box, Typography} from "@mui/material";
import * as React from "react";
import {useContext} from "react";
import {ResourceTable} from "./ResourceTable";
import Heading from "../Headings/Heading";
import UserInfo from "./UserInfo";
import {UsersContext} from "../../context/userContext";
import style from "../../template/style";

function DetailsContainer() {

    const {userDetailed} = useContext(UsersContext);

    return (
        <Box sx={style.content}>
            <Box>
                <Heading id={'userInfoHeading'} title={'Brukerinformasjon'}/>
                <UserInfo/>
            </Box>
            <Box sx={style.addNewResourceSection}>
                <Typography
                    id={'tableHeadingInfo'}
                    variant="h2"
                    sx={{marginY: '2rem'}}
                >
                    {userDetailed?.fullName + ' er tildelt følgende ressurser:'}
                </Typography>
            </Box>
            <ResourceTable/>
        </Box>
    );
}

export default DetailsContainer;