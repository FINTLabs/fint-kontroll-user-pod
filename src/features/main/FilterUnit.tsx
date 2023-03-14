import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Autocomplete, FormControl} from "@mui/material";
import {UsersContext} from "../../context/userContext";
import TextField from "@mui/material/TextField";

export default function FilterUnit() {

    const {
        userType,
        updateCurrentPage,
        currentPage,
        orgUnitPage,
        updateOrganisationUnitId,
        organisationUnitId,
        getUserPage,
        getOrgUnitForList
    } = useContext(UsersContext);


    useEffect(() => {
        getUserPage();
        getOrgUnitForList();
        console.log(organisationUnitId + "orgUnits")

        return () => {
            console.log("Hey")
        }
    }, [userType, currentPage, organisationUnitId]);

    const updatePage = () => {
        updateCurrentPage(0)
    }

    return (
        <FormControl style={{minWidth: 220}} sx={{mr: '2rem', my: '1rem'}}>
            <Autocomplete
                id="enheter"
                options={orgUnitPage ? orgUnitPage.orgUnits.map((orgUnit) => (orgUnit)) : []}
                sx={{width: 340}}
                onChange={(event, value) => updateOrganisationUnitId(value ? value.organisationUnitId : 0)}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                onClick={updatePage}
                getOptionLabel={(option) => option.name}
                renderInput={(params) =>
                    <TextField
                        {...params}
                        label="Enhet"
                        inputProps={{
                            ...params.inputProps,
                            'aria-label': 'sok enhet',
                        }}
                    />
                }
            />
        </FormControl>
    );
}