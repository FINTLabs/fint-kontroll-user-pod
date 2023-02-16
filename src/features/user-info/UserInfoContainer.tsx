import {Box, Theme, Typography} from "@mui/material";
import * as React from "react";
import {ResourceTable} from "./ResourceTable";
import Heading from "../Headings/Heading";
import UserInfo from "./UserInfo";
import {createStyles, makeStyles} from "@mui/styles";
import {UsersContext} from "../../context/userContext";
import {useContext} from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            maxWidth: 752,
            [theme.breakpoints.up("sm")]: {
                height: "calc(100% - 64px)",
                margin: theme.spacing(10)
            }
        },
    }));

function UserInfoContainer() {

    const classes = useStyles();
    const {userDetailed} = useContext(UsersContext);
    return (
        <Box className={classes.content}>
            <Box>
                <Heading title={'Brukerinformasjon'}/>
                <UserInfo/>
            </Box>
            <Box ml={'1rem'}>
                <Typography variant="h2" sx={{fontWeight: 'light', fontSize: 'h6.fontSize', marginY: '2rem'}}>
                    {userDetailed?.fullName + ' er tildelt følgende ressurser:'}
                </Typography>
            </Box>
            <ResourceTable/>
        </Box>
    );
}

export default UserInfoContainer;