import * as React from 'react';

import {Typography} from "@mui/material";

type HeaderProps = {
    title: string
}

const H1 = (props: HeaderProps) => {
    return (
        <Typography variant="h1" sx={{ fontWeight: 'regular', fontSize: 'h5.fontSize', mx: 1}}>
            {props.title}
        </Typography>
    );
}
export default H1;