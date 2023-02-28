import {Box} from "@mui/material";
import SearchFieldUser from "./SearchField";
import FilterUnit from "./FilterUnit";
import FilterTypeUser from "./FilterType";
import {UserTable} from "./UserTable";
import Heading from "../Headings/Heading";
import * as React from "react";
import style from "../../template/style";

function MainContainer() {

    return (
        <Box sx={style.content}>
            <Heading title={'Brukere'}/>
            <Box sx={style.filters} my={6}>
                <FilterUnit/>
                <FilterTypeUser/>
                <SearchFieldUser/>
            </Box>
            <Box sx={style.table}>
                <UserTable/>
            </Box>
        </Box>
    );
}

export default MainContainer;