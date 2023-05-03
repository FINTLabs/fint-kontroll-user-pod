import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import {Edit} from "@mui/icons-material";
import {Box, Tooltip} from "@mui/material";

export const ResourceTable: any = () => {

    return (
        <Box>
            <TableContainer sx={{maxWidth: 1536}} id={'resourceTable'}>
                <Table aria-label="Resource-table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" sx={{fontWeight: 'bold'}}>Ressurs</TableCell>
                            <TableCell align="left" sx={{fontWeight: 'bold'}}>Tildelt av</TableCell>
                            <TableCell></TableCell>
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
                            <TableCell align="center">
                                <Tooltip title={"Rediger"}>
                                    <IconButton color={'primary'} aria-label="edit" id={'editIcon'}>
                                        <Edit/>
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};