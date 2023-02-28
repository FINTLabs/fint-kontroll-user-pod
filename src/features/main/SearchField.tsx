import * as React from 'react';
import {useContext, useState} from 'react';
import TextField from '@mui/material/TextField';
import {UsersContext} from "../../context/userContext";
import {FormControl, InputAdornment} from "@mui/material";
import {Clear, Search} from "@mui/icons-material";

export default function SearchFieldUser() {

//     const {findUser, searchValue, searchString} = useContext(UsersContext);
//
//
//     function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//         searchValue(event.target.value as string);
//         findUser(event.target.value as string);
//         console.log(event.target.value as string);
//     }
//
//
//     return (
//         <TextField
//             style={{minWidth: 220}} sx={{ml: '2rem', my: '1rem'}}
//             id="outlined-search"
//             label="Søk"
//             value={searchString}
//             type="search"
//             variant="outlined"
//             onChange={handleChange}
//             InputLabelProps={{
//                 shrink: true,
//             }}
//         />
//
//     );
// };

    const [showClearIcon, setShowClearIcon] = useState("none");
    const [showSearchIcon, setShowSearchIcon] = useState("");

    const {findUser, searchValue, searchString, getUserPage} = useContext(UsersContext);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
        setShowSearchIcon(event.target.value !== "" ? "none" : "flex");
        searchValue(event.target.value as string);
        findUser(event.target.value as string);
        console.log(event.target.value as string);
    }

    const handleClick = (): void => {
        setShowClearIcon("none");
        setShowSearchIcon("")
        searchValue("");
        getUserPage();
    };

    return (
        <FormControl style={{minWidth: 220}} sx={{ml: '2rem', my: '1rem'}}>
            <TextField
                id="outlined-search"
                label="Søk"
                role="search"
                onChange={handleChange}
                value={searchString}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment
                            position="start"
                            style={{
                                display: showSearchIcon,
                            }}
                        >
                            <Search/>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment
                            position="end"
                            style={{
                                display: showClearIcon,
                            }}
                            onClick={handleClick}
                        >
                            <Clear/>
                        </InputAdornment>
                    )
                }}
            />
        </FormControl>
    );
}