import {Box, Button, Theme, Typography} from "@mui/material";
import * as React from "react";
import {ResourceTable} from "./ResourceTable";
import Heading from "../Headings/Heading";
import UserInfo from "./UserInfo";
import {createStyles, makeStyles} from "@mui/styles";
import {UsersContext} from "../../context/userContext";
import {useContext} from "react";
import {Add} from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            [theme.breakpoints.up("sm")]: {
                margin: theme.spacing(10)
            }
        },
        buttonSection: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "column",
            }
        }
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
            <Box className={classes.buttonSection}>
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

export default UserInfoContainer;