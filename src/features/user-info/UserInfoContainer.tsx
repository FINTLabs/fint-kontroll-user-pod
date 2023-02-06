import {Box, Divider, Theme} from "@mui/material";
import * as React from "react";
import {ResourceTable} from "./ResourceTable";
import H1 from "../Headings/H1";
import UserInfo from "./UserInfo";
import {createStyles, makeStyles} from "@mui/styles";
import H2 from "../Headings/H2";
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
                <H1 title={'Brukerinformasjon'}/>
                <UserInfo/>
            </Box>
            <Box ml={'1rem'}>
                <H2 title={userDetailed?.fullName + ' er tildelt følgende ressurser:'}/>
            </Box>
            <ResourceTable/>
        </Box>
    );
}

export default UserInfoContainer;