import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import RadioSidebar from "./RadioSidebar";
import CheckSidebar from "./CheckSidebar";

const drawerWidth = 240;

const dataRadio = {
    "title": "radio component 1",
    "objects": [
        {
            "label": "object 1",
            "value": "object 1"
        },
        {
            "label": "object 2",
            "value": "object 2"
        }
    ]
};

const dataCheck = {
    "title": "check component 1",
    "objects": [
        {
            "label": "object 1",
            "value": true,
        },
        {
            "label": "object 2",
            "value": false,
        }
    ]
};

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

export default function Sidebar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="left"
            >
                <Divider />
                <List>
                    {['Inbox', 'Starred'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <RadioSidebar title={dataRadio.title} objects={dataRadio.objects} />
                <CheckSidebar title={dataCheck.title} objects={dataCheck.objects} />
            </Drawer>
        </div>
    )
}
