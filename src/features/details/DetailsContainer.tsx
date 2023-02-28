import {Box, Button, Typography} from "@mui/material";
import * as React from "react";
import {useContext} from "react";
import {ResourceTable} from "./ResourceTable";
import Heading from "../Headings/Heading";
import UserInfo from "./UserInfo";
import {UsersContext} from "../../context/userContext";
import {Add} from "@mui/icons-material";
import style from "../../template/style";

function DetailsContainer() {

    const {userDetailed} = useContext(UsersContext);

    return (
        <Box sx={style.content}>
            <Box>
                <Heading title={'Brukerinformasjon'}/>
                <UserInfo/>
            </Box>
            <Box sx={style.addNewResourceSection}>
                <Typography
                    variant="h2"
                    sx={{fontWeight: 'light', fontSize: 'h6.fontSize', marginY: '2rem'}}
                >
                    {userDetailed?.fullName + ' er tildelt følgende ressurser:'}
                </Typography>
                <Button
                    color={"primary"}
                    variant="contained"
                    startIcon={<Add/>}
                >
                    Legg til ressurs
                </Button>
            </Box>
            <ResourceTable/>
        </Box>
    );
}

export default DetailsContainer;