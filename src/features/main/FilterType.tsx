import * as React from 'react';
import {useContext, useEffect} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {UsersContext} from "../../context/userContext";

export default function FilterGroupUser() {

    const {userType, updateUserType, updateCurrentPage, currentPage, getUserPage} = useContext(UsersContext);

    useEffect(() => {
        //findUser(searchString)
        getUserPage();
    }, [userType, currentPage]);

    function handleChange(event: SelectChangeEvent) {
        updateUserType(event.target.value as string);
        console.log(event.target.value as string + "test")
    }

    const updatePage = () => {
        updateCurrentPage(0)
    }

    return (
        <FormControl style={{minWidth: 220}} sx={{mx: '2rem', my: '1rem'}}>
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