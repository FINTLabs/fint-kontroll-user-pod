import * as React from 'react';
import {useContext, useEffect} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {UsersContext} from "../../context/userContext";

export default function FilterUnit() {

    useEffect(() => {
        // getUserPage();
        getOrgUnitPage()
        getOrgUnit()
        console.log(orgUnits + "orgUnits")
    }, []);

    const {
        userType,
        updateUserType,
        updateCurrentPage,
        currentPage,
        findUser,
        searchString,
        page,
        orgName,
        getOrgName,
        orgUnits,
        getOrgUnit,
        orgUnitPage,
        getOrgUnitPage,
        getUserPage,
    } = useContext(UsersContext);

    function handleChange(event: SelectChangeEvent) {
        getOrgName(event.target.value as string);

        console.log(event.target.value as string + "Org.navn")
    }

    const updatePage = () => {
        updateCurrentPage(0)
    }

    return (
        <FormControl style={{minWidth: 220}} sx={{mr: '2rem', my: '1rem'}}>
            <InputLabel id="demo-simple-select-label">Enhet</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select-autowidth"
                value={orgName}
                label="Enhet"
                onChange={handleChange}
            >
                {orgUnitPage?.orgUnits.map((orgUnit) => (
                    <MenuItem key={orgUnit.id} value={orgUnit.name} onClick={updatePage}>
                        {orgUnit.name}
                    </MenuItem>
                ))}

            </Select>
        </FormControl>
    );
}