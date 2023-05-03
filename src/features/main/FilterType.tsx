import * as React from 'react';
import {useContext} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {UsersContext} from "../../context/userContext";

export default function FilterGroupUser() {

    const {userType, updateUserType, updateCurrentPage} = useContext(UsersContext);

    function handleChange(event: SelectChangeEvent) {
        updateUserType(event.target.value as string);
        console.log(event.target.value as string + "test")
    }

    const updatePage = () => {
        updateCurrentPage(0)
    }

    const options = [
        {value: "", label: "Alle"},
        {value: "STUDENT", label: "Elev"},
        {value: "EMPLOYEE", label: "Ansatt"}
    ];

    return (
        <FormControl style={{minWidth: 220}} sx={{mx: '2rem', my: '1rem'}}>
            <InputLabel
                id="valg-brukertype"
            >
                Brukertype
            </InputLabel>
            <Select
                labelId="valg-brukertype"
                id="brukertype"
                value={userType}
                label="Brukertype"
                onChange={handleChange}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value} onClick={updatePage}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}