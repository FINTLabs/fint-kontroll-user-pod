import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select, Theme} from "@mui/material";

export default function FilterGroupUser() {

    function handleChange() {
    }

    let type;
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
                value={type}
                label="Brukertype"
                onChange={handleChange}
            >
                <MenuItem value={1}>Elev</MenuItem>
                <MenuItem value={2}>Ansatt</MenuItem>
            </Select>
        </FormControl>
    );
}