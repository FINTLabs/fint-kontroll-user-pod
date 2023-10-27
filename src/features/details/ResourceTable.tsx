import * as React from 'react';
import {useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Alert, Box, TableFooter, TablePagination} from "@mui/material";
import {UsersContext} from "../../context/userContext";
import TablePaginationActions from "../main/UserTableFooter";

export const ResourceTable: any = () => {

    const {
        assignmentPage,
        assignmentSize,
        setAssignmentSize,
        currentAssignmentPage,
        updateCurrentAssignmentPage,
        error
    } = useContext(UsersContext);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        console.log("new page:", newPage)
        updateCurrentAssignmentPage(newPage)
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setAssignmentSize(parseInt(event.target.value, 10));
        updateCurrentAssignmentPage(0);
    };

    return (
        <Box>
            {error && (
                <Alert severity="warning">{error}</Alert>
            )}

            <TableContainer sx={{maxWidth: 1536}} id={'resourceTable'}>
                <Table aria-label="Resource-table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{fontWeight: 'bold'}}>Ressurs</TableCell>
                            <TableCell align="left" sx={{fontWeight: 'bold'}}>Ressurstype</TableCell>
                            <TableCell align="left" sx={{fontWeight: 'bold'}}>Tildelt av</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {assignmentPage?.resources.map((resources) => (

                            <TableRow
                                key={resources.id}
                                hover={true}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell align="left" component="th" scope="row">
                                    {resources.resourceName}
                                </TableCell>
                                <TableCell align="left" component="th" scope="row">
                                    {resources.resourceType}
                                </TableCell>
                                <TableCell align="left">

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
                                count={assignmentPage ? assignmentPage.totalItems : 0}
                                rowsPerPage={assignmentSize}
                                page={currentAssignmentPage}
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
                    </TableFooter>
                </Table>
            </TableContainer>
        </Box>
    );
};