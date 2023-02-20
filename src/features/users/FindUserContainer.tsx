import {Box, Theme} from "@mui/material";
import SearchFieldUser from "./SearchFieldUsers";
import {createStyles, makeStyles} from "@mui/styles";
import FilterUnitUser from "./FilterUnitUser";
import FilterTypeUser from "./FilterTypeUser";
import {UserTable} from "./UserTable";
import Heading from "../Headings/Heading";
import * as React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            [theme.breakpoints.up("sm")]: {
                margin: theme.spacing(10)
            }
        },
        filters: {
            display: "flex",
            flexDirection: "row",
            [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "column",
                margin: theme.spacing(10)
            }
        },
        table: {
            display: "flex",
            flexDirection: "column",
        },
    }));

function FindUserContainer() {
    const classes = useStyles();

    return (
        <Box className={classes.content}>
            <Heading title={'Brukere'}/>
            <Box className={classes.filters} my={6}>
                <FilterUnitUser/>
                <FilterTypeUser/>
                <SearchFieldUser/>
            </Box>
            <Box className={classes.table}>
                <UserTable/>
            </Box>
        </Box>
    );
}

export default FindUserContainer;