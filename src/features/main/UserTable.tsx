import * as React from 'react';
import {useContext, useState} from 'react';
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
import DialogUnit from "./DialogUnit";
import ToolBar from "./ToolBar";


export const UserTable: any = () => {

    const {page, currentPage, updateCurrentPage, searchValue, size, setSize} = useContext(UsersContext);
    const [openDialog, setOpenDialog] = useState(false);

    /*const {page, roleType, currentPage, setCurrentPage, size, searchValue, setSize} = useContext(RolesContext);
*/
    /* useEffect(() => {
         getUserPage();
     }, [currentPage])*/

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
        // getUserPage();
    };

    const handleTypeSelect = () => {
        setOpenDialog(false);
        console.log("selected");
    }

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        console.log("new page:", newPage)
        updateCurrentPage(newPage)
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        // setRowsPerPage(parseInt(event.target.value, 10));
        setSize(parseInt(event.target.value, 10));
        updateCurrentPage(0);
    };

    return (
        <Box>
            <DialogUnit
                // data={data}
                onClose={handleTypeSelect}
                open={openDialog}
            />
            <TableContainer sx={{minWidth: 1040, maxWidth: 1536}} id={"userTable"}>
                <ToolBar onShowDialog={() => setOpenDialog(true)}/>
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
                    {/*<TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, 50]}
                                colSpan={4}
                                count={page ? page.totalItems : 0}
                                rowsPerPage={size}
                                page={currentPage}
                                SelectProps={{
                                    inputProps: {
                                        'aria-label': 'rows per page',
                                    },
                                    native: true,
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>*/}
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