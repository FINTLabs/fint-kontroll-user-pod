import * as React from 'react';

import {Typography} from "@mui/material";

type HeaderProps = {
    title: string | any
}

const H2 = (props: HeaderProps) => {
    return (
        <Typography variant="h2" sx={{fontWeight: 'light', fontSize: 'h6.fontSize', marginY: '2rem'}}>
            {props.title}
        </Typography>
    );
}
export default H2;