import {Box, Button, Typography} from "@mui/material";
import * as React from "react";
import {useContext, useEffect} from "react";
import Heading from "../Headings/Heading";
import UserInfo from "./UserInfo";
import {UsersContext} from "../../context/userContext";
import style from "../../template/style";
import {useParams} from "react-router-dom";
import {ResourceTable} from "./ResourceTable";

function DetailsContainer() {


    const {basePath, getUserById, userDetailed, getAssignmentPage} = useContext(UsersContext);
    const {id} = useParams<string>();

    useEffect(() => {
        console.log("DatailsContainer", "useEffetct", id);
        if (id) {
            getUserById(`${basePath === '/' ? '' : basePath}/api/users/${id}`);
            getAssignmentPage(parseInt(id))
        }
        // eslint-disable-next-line
    }, [id])

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
                <Button
                    sx={{minWidth: '80px'}}
                    id={"button-to-edit-resources"}
                    variant={"contained"}
                    aria-label="Toggle"
                    color={"primary"}
                    href={`${basePath}/ressurser/info/${id}`}
                >
                    Rediger ressurser
                </Button>
            </Box>
            <ResourceTable/>
        </Box>
    );
}

export default DetailsContainer;