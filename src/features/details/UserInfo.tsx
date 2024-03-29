import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import * as React from "react";
import {useContext} from "react";
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import {UsersContext} from "../../context/userContext";
import {AlternateEmail, Apartment, Person, PersonOutline} from "@mui/icons-material";

function UserInfo() {

    const {userDetailed} = useContext(UsersContext);

    return (
        <Box sx={{flexGrow: 1, maxWidth: 752}}>
            <FormGroup row>
            </FormGroup>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{
                                    border: '1px solid #4b727a',
                                    backgroundColor: 'transparent'
                                }}>
                                    {<Person sx={{color: '#4b727a'}}/>}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                id={'userFullNameText'}
                                primary={userDetailed?.fullName}
                                secondary={'Navn'}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{
                                    border: '1px solid #4b727a',
                                    backgroundColor: 'transparent'
                                }}>
                                    {<PersonOutline sx={{color: '#4b727a'}}/>}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                id={'userNameText'}
                                primary={userDetailed?.userName}
                                secondary={'Brukernavn'}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{
                                    border: '1px solid #4b727a',
                                    backgroundColor: 'transparent'
                                }}>
                                    {<Apartment sx={{color: '#4b727a'}}/>}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                id={'orgUnitText'}
                                primary={userDetailed?.organisationUnitName}
                                secondary={'Enhet'}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{
                                    border: '1px solid #4b727a',
                                    backgroundColor: 'transparent'
                                }}>
                                    {<AlternateEmail sx={{color: '#4b727a'}}/>}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={userDetailed?.email}
                                secondary={'E-post'}
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserInfo;