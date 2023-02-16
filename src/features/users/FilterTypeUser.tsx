import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {useContext} from "react";
import {UsersContext} from "../../context/userContext";

export default function FilterGroupUser() {

    const {userType, updateUserType, getUserPage, size, currentPage, updateCurrentPage} = useContext(UsersContext);

    function handleChange(event: SelectChangeEvent) {
        updateUserType(event.target.value as string);
        getUserPage(0, size, event.target.value as string);
    }

    const updatePage = () => {
        updateCurrentPage(0)
        getUserPage(currentPage - 1, size, userType);
    }

    return (
        <FormControl style={{minWidth: 220}} sx={{mx: '2rem'}}>
            <InputLabel
                id="demo-simple-select-label"
            >
                Brukertype
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-autowidth"
                value={userType}
                label="Brukertype"
                onChange={handleChange}
            >
                <MenuItem value={"all"} onClick={updatePage}>Alle</MenuItem>
                <MenuItem value={"STUDENT"} onClick={updatePage}>Elev</MenuItem>
                <MenuItem value={"EMPLOYEE"} onClick={updatePage}>Ansatt</MenuItem>
            </Select>
        </FormControl>
    );
}