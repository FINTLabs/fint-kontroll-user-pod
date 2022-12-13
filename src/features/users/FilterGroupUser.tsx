import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export default function FilterGroupUser() {

    function handleChange() {
    }

    let type;
    return (
        <FormControl style={{minWidth: 220}} sx={{mx: '2rem'}}>
            <InputLabel id="demo-simple-select-label">Gruppetype</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-autowidth"
                value={type}
                label="Gruppetype"
                onChange={handleChange}
            >
                <MenuItem value={1}>Basisgruppe 1FBA</MenuItem>
                <MenuItem value={2}>Basisgruppe 2HDA</MenuItem>
            </Select>
        </FormControl>
    );
}