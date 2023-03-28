import * as React from 'react';

import {Typography} from "@mui/material";

type HeaderProps = {
    title: string
}

const Heading = (props: HeaderProps) => {
    return (
        <Typography variant="h1" sx={{fontWeight: 'regular', fontSize: '2rem', marginBottom: '1rem'}}>
            {props.title}
        </Typography>
    );
}
export default Heading;