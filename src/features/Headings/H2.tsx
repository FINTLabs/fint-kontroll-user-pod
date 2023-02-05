import * as React from 'react';

import {Typography} from "@mui/material";

type HeaderProps = {
    title: string
}

const H2 = (props: HeaderProps) => {
    return (
        <Typography variant="h1" sx={{ fontWeight: 'regular', fontSize: 'h6.fontSize', mx: 1}}>
            {props.title}
        </Typography>
    );
}
export default H2;