import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import * as React from "react";
import {styled} from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import {useContext, useEffect} from "react";
import {UsersContext} from "../../context/userContext";
import {AlternateEmail, Apartment, Person, PersonOutline, Phone} from "@mui/icons-material";
import {useParams} from "react-router-dom";
import {ResourceTable} from "./ResourceTable";
import H1 from "../Headings/H1";

const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));

function UserInfo() {

    const {getUserById, userDetailed} = useContext(UsersContext);
    const {id} = useParams<string>();

    useEffect(() => {
        if (id) {
            getUserById(id);
        }
    }, [])

    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>
            <H1 title='Brukerinformasjon'/>
            <FormGroup row>
            </FormGroup>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Demo>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        {<Person/>}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={userDetailed?.fullName}
                                    secondary={'Navn'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        {<PersonOutline/>}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={userDetailed?.userName}
                                    secondary={'Brukernavn'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        {<Apartment/>}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={userDetailed?.organisationUnitName}
                                    secondary={'Enhet'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        {<Phone/>}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={userDetailed?.mobilePhone}
                                    secondary={'Telefon'}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        {<AlternateEmail/>}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={userDetailed?.email}
                                    secondary={'E-post'}
                                />
                            </ListItem>
                        </List>
                    </Demo>
                </Grid>
            </Grid>
            <ResourceTable/>
        </Box>
    );
}

export default UserInfo;