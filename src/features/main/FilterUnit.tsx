import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {Autocomplete, FormControl} from "@mui/material";
import {UsersContext} from "../../context/userContext";
import TextField from "@mui/material/TextField";

export default function FilterUnit() {

    const {
        userType,
        updateCurrentPage,
        currentPage,
        orgUnitPage,
        getOrgUnitPage,
        updateOrganisationUnitId,
        organisationUnitId,
        getUserPage
    } = useContext(UsersContext);


    useEffect(() => {
        getUserPage();
        getOrgUnitPage();
        console.log( organisationUnitId + "orgUnits")
    }, [userType, currentPage, organisationUnitId]);

    const updatePage = () => {
        updateCurrentPage(0)
    }

    return (
        <FormControl style={{minWidth: 220}} sx={{mr: '2rem', my: '1rem'}}>
            <Autocomplete
                // multiple
                id="tags-standard"
                options={orgUnitPage ? orgUnitPage.orgUnits.map((orgUnit) => (orgUnit)) : []}
                sx={{width: 340}}
                onChange={(event, value) => updateOrganisationUnitId(value ? value.organisationUnitId : 0)}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                onClick={updatePage}
                getOptionLabel={(option) => option.name}
                renderInput={(params) =>
                    <TextField {...params} label="Enhet"
                    />
                }
            />
        </FormControl>
        /*<FormControl style={{minWidth: 220}} sx={{mr: '2rem', my: '1rem'}}>
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
        </FormControl>*/
    );
}