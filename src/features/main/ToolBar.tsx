import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button} from "@mui/material";
import SearchField from "./SearchField";
import FilterType from "./FilterType";
import {Apartment} from "@mui/icons-material";
import style from "../../template/style";

interface CustomTableToolbarProps {
    onShowDialog: (event: React.MouseEvent<unknown>) => void;
}

function CustomTableToolbar(props: CustomTableToolbarProps) {
    const {onShowDialog} = props;

    return (
        <Toolbar
            sx={{
                pl: {sm: 2},
                pr: {xs: 1, sm: 1},
            }}
        >
            <Typography
                sx={{flex: '1 1 100%'}}
                variant="h1"
                id="tableTitle"
            >
                Brukere
            </Typography>
            <SearchField/>
            <FilterType/>
            <Button
                id={'selectUnitsIcon'}
                variant="outlined"
                endIcon={<Apartment/>}
                onClick={onShowDialog}
                sx={style.changeOrgButton}
                style={{fontSize: '1em'}}
            >
                Velg enhet
            </Button>
        </Toolbar>
    );
}

export default CustomTableToolbar;