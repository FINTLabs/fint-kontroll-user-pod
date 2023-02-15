import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchFieldUser() {
    return (
        <Stack sx={{width: 220, mx: '2rem'}}>
            <Autocomplete
                freeSolo
                id="free-solo-search-user"
                disableClearable
                options={users.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Søk etter bruker.."
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
        </Stack>
    );
}

// Eksempeldata
const users = [
    {title: 'Ola Normann'},
    {title: 'Kari Normann'},
    {title: 'John Doe'},
    {title: 'Jane Doe'},
    {title: 'Mikke Mus'},

];