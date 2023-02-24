import * as React from 'react';
import {useContext} from 'react';
import TextField from '@mui/material/TextField';
import {UsersContext} from "../../context/userContext";

export default function SearchFieldUser() {

    const {findUser, searchValue, searchString} = useContext(UsersContext);


    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        searchValue(event.target.value as string);
        findUser(event.target.value as string);
        console.log(event.target.value as string);
    }


    return (
        <TextField
            style={{minWidth: 220}} sx={{ml: '2rem', my: '1rem'}}
            id="outlined-search"
            label="Search field"
            value={searchString}
            type="search"
            variant="outlined"
            onChange={handleChange}
        />

    );
};