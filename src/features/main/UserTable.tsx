import * as React from 'react';
import {useContext, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {InfoOutlined} from "@mui/icons-material";
import {Alert, Box, Button, TableFooter, TablePagination} from "@mui/material";
import {Link} from "react-router-dom";
import {UsersContext} from "../../context/userContext/UsersContext";
import DialogUnit from "./DialogUnit";
import ToolBar from "./ToolBar";
import TablePaginationActions from "./UserTableFooter";


export const UserTable: any = () => {

    const {
        page,
        size,
        currentPage,
        updateCurrentPage,
        searchValue,
        setSize,
        selectedOrgUnits,
        setSelected,
        error
    } = useContext(UsersContext);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClick = (): void => {
        searchValue("");
    };

    const handleTypeSelect = () => {
        setOpenDialog(false);
        const orgunitIds = selectedOrgUnits.map(orgunit => orgunit.organisationUnitId);
        setSelected(orgunitIds);
        console.log("selected", orgunitIds);
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
        setSize(parseInt(event.target.value, 10));
        updateCurrentPage(0);
    };

    return (
        <Box>
            <DialogUnit
                onClose={handleTypeSelect}
                open={openDialog}
            />

            {error && (
                <Alert severity="warning">{error}</Alert>
            )}

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
                                <TableCell align="right">

                                    <Button
                                        id={`iconUserInfo-${user.id}`}
                                        variant={"outlined"}
                                        aria-label="Se info"
                                        component={Link}
                                        to={`info/${user.id}`}
                                        onClick={handleClick}
                                        color={"primary"}
                                        endIcon={<InfoOutlined/>}
                                    >
                                        Se info
                                    </Button>

                                    {/*<Tooltip title={"Se detaljer"}>
                                        <IconButton
                                            id={`iconUserInfo-${user.id}`}
                                            aria-label="informasjon"
                                            component={Link}
                                            to={`info/${user.id}`}
                                            onClick={handleClick}
                                        >
                                            <SettingsRounded color={"primary"}/>
                                        </IconButton>
                                    </Tooltip>*/}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                id={"pagination"}
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
                                    autoComplete: "off"
                                }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Box>
    );
};