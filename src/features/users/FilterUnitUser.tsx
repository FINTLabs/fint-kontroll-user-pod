import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

export default function FilterUnitUser() {

    function handleChange() {
    }

    let unit;
    return (
        <FormControl style={{minWidth: 220}} sx={{mr: '2rem'}}>
            <InputLabel id="demo-simple-select-label">Enhet</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-autowidth"
                value={unit}
                label="Enhet"
                onChange={handleChange}
            >
                <MenuItem value={1}>Viken videregående skole</MenuItem>
                <MenuItem value={2}>Glemmen videregående skole</MenuItem>
                <MenuItem value={3}>Drammen videregående skole</MenuItem>
            </Select>
        </FormControl>
    );
}