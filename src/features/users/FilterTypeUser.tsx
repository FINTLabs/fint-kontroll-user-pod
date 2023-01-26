import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Theme} from "@mui/material";
import {useContext} from "react";
import {UsersContext} from "../../context/userContext";

export default function FilterGroupUser() {

    const {userType, updateUserType, getUserPage} = useContext(UsersContext);

    function handleChange(event: SelectChangeEvent) {
        updateUserType(event.target.value as string);
        getUserPage(0, 10, event.target.value as string);
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
                <MenuItem value={"all"}>Alle</MenuItem>
                <MenuItem value={"students"}>Elev</MenuItem>
                <MenuItem value={"employees"}>Ansatt</MenuItem>
            </Select>
        </FormControl>
    );
}