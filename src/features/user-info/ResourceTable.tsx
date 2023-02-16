import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import {Edit} from "@mui/icons-material";
import {createStyles, makeStyles} from "@mui/styles";
import {Box, Theme} from "@mui/material";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            color: theme.palette.primary.main
        },
    }));

export const ResourceTable: any = () => {
    const classes = useStyles();

    return (
        <Box sx={{p: 1}}>
            <TableContainer sx={{maxWidth: 1040}}>
                <Table aria-label="Resources">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Ressurs</TableCell>
                            <TableCell align="left">Tildelt av</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="edit" component={Link} to={`/`}>
                                    <Edit className={classes.icon}/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            hover={true}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell align="left" component="th" scope="row">
                                Office 365
                            </TableCell>
                            <TableCell align="left">
                                En høyere i systemet
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};