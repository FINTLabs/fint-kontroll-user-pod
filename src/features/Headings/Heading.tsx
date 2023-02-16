import * as React from 'react';

import {Typography} from "@mui/material";

type HeaderProps = {
    title: string
}

const Heading = (props: HeaderProps) => {
    return (
        <Typography variant="h1" sx={{fontWeight: 'regular', fontSize: 'h5.fontSize', marginBottom: '1rem'}}>
            {props.title}
        </Typography>
    );
}
export default Heading;