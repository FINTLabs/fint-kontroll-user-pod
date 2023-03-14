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
import {Box, Button, Tooltip, Typography,} from "@mui/material";
import {Link} from "react-router-dom";
import {UsersContext} from "../../context/userContext/UsersContext";
import style from '../../template/style';


export const UserTable: any = () => {

    const {getUserPage, page, currentPage, updateCurrentPage, searchValue} = useContext(UsersContext);

    useEffect(() => {
        getUserPage();
    }, [currentPage])

    const nextPage = () => {
        updateCurrentPage(currentPage + 1);
    }

    const previousPage = () => {
        updateCurrentPage(currentPage - 1);
    }

    const pageNumber = () => {
        if (page?.totalPages === 0) {
            return currentPage
        } else return currentPage + 1
    }

    const handleClick = (): void => {
        searchValue("");
        getUserPage();
    };

    return (
        <Box>
            <TableContainer sx={{maxWidth: 1536}}>
                <Table aria-label="Users-table">
                    <TableHead>
                        <TableRow sx={{fontWeight: 'bold'}}>
                            <TableCell align="left" sx={{fontWeight: 'bold'}}>Navn</TableCell>
                            <TableCell align="left" sx={{fontWeight: 'bold'}}>Enhet</TableCell>
                            <TableCell align="left" sx={{fontWeight: 'bold'}}>Brukertype</TableCell>
                            <TableCell align="left" sx={{fontWeight: 'bold'}}></TableCell>
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
                                    <Tooltip title={"Se detaljer"}>
                                        <IconButton aria-label="informasjon"
                                                    component={Link}
                                                    to={`/info/${user.id}`}
                                                    onClick={handleClick}
                                        >
                                            <SettingsRounded color={"primary"}/>
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={style.navigateButtons}>
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
                side {pageNumber()} av {page?.totalPages}
            </Typography>
        </Box>
    );
};