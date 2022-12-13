import {Box, Theme} from "@mui/material";
import SearchFieldUser from "./SearchFieldUsers";
import {createStyles, makeStyles} from "@mui/styles";
import FilterUnitUser from "./FilterUnitUser";
import FilterGroupUser from "./FilterGroupUser";
import UserTable from "./UserTable";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            [theme.breakpoints.up("sm")]: {
                height: "calc(100% - 64px)",
                margin: theme.spacing(10)
            }
        },
        filters: {
            display: "flex",
            flexDirection: "row",
            margin: "10px",
        },
    }));

function FindUserContainer() {
    const classes = useStyles();
    return (
        <Box className={classes.content}>
            <Box>
                <Box className={classes.filters} my={6}>
                    <SearchFieldUser/>
                    <FilterUnitUser/>
                    <FilterGroupUser/>
                </Box>
                <Box>
                    <UserTable/>
                </Box>
            </Box>
        </Box>
    );
}

export default FindUserContainer;