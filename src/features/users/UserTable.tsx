import * as React from 'react';
import {useContext, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import {ArrowBackIos, ArrowForwardIos, SettingsRounded} from "@mui/icons-material";
import {createStyles, makeStyles} from "@mui/styles";
import {Box, Button, Theme, Typography,} from "@mui/material";
import {Link} from "react-router-dom";
import {UsersContext} from "../../context/userContext/UsersContext";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            color: theme.palette.primary.main
        },
        buttons: {
            display: "flex",
            justifyContent: "center",
        },
    }));

export const UserTable: any = () => {
    const classes = useStyles();
    const {getUserPage, page, currentPage, updateCurrentPage} = useContext(UsersContext);

    useEffect(() => {
        getUserPage();
    }, [currentPage])

    const nextPage = () => {
        updateCurrentPage(currentPage + 1);
    }

    const previousPage = () => {
        updateCurrentPage(currentPage - 1);
    }

    return (
        <Box>
            <TableContainer sx={{maxWidth: 1536}}>
                <Table aria-label="Users-table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Navn</TableCell>
                            <TableCell align="left">Enhet</TableCell>
                            <TableCell align="left">Brukertype</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {page?.users.map((user) => (
                            <TableRow
                                key={user.id}
                                hover={true}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="left" component="th" scope="row">
                                    {user.fullName}
                                </TableCell>
                                <TableCell align="left">{user.organisationUnitName}</TableCell>
                                <TableCell align="left">{user.userType}</TableCell>
                                <TableCell align="left">
                                    <IconButton aria-label="settings"
                                                component={Link}
                                                to={`/info/${user.id}`}
                                    >
                                        <SettingsRounded className={classes.icon}/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box className={classes.buttons}>
                <Button
                    variant="text"
                    color={"primary"}
                    startIcon={<ArrowBackIos/>}
                    onClick={previousPage}
                    disabled={currentPage === 0}
                    sx={{mr: 4, mt: 5}}
                >
                    Forrige
                </Button>
                <Button
                    variant="text"
                    color={"primary"}
                    endIcon={<ArrowForwardIos/>}
                    onClick={nextPage}
                    disabled={currentPage === page?.totalPages - 1}
                    sx={{mt: 5}}
                >
                    Neste
                </Button>
            </Box>
            <Typography align={"center"}>
                side {currentPage + 1} av {page?.totalPages}
            </Typography>
        </Box>
    );
};