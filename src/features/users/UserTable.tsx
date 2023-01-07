import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import {SettingsRounded} from "@mui/icons-material";
import {createStyles, makeStyles} from "@mui/styles";
import {Box, Theme,} from "@mui/material";
import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {UsersContext} from "../../context/userContext";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            color: theme.palette.primary.main
        }
    }));

export const UserTable: any = () => {
    const classes = useStyles();
    const {getAllUsers, users, getUserById, user} = useContext(UsersContext);


    useEffect(() => {
        getAllUsers();
        getUserById("1");
    }, [])

    return (
        <Box sx={{p: 1}}>
            <TableContainer sx={{maxWidth: 1040}}>
                <Table aria-label="simple icon">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Navn</TableCell>
                            <TableCell align="left">Enhet</TableCell>
                            <TableCell align="left">Brukertype</TableCell>
                            <TableCell align="left">Gruppetype</TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user.resourceId}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="left" component="th" scope="row">
                                    {`${user.firstName} ${user.lastName}`}
                                </TableCell>
                                <TableCell align="left">{}</TableCell>
                                <TableCell align="left">{user.userType}</TableCell>
                                <TableCell align="left">{}</TableCell>
                                <TableCell align="left">
                                    <IconButton aria-label="settings"
                                                component={Link} to="/info"
                                    >
                                        <SettingsRounded className={classes.icon}/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};