import { useNavigate } from "react-router-dom";
import React from 'react';
import { useEffect } from "react";
import {
    AppBar, Toolbar,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ForwardIcon from '@mui/icons-material/Forward';
import { useDialog } from "./../../component/DialogContext";
import core from "./../../config/coreBridge";
import { platform } from "../../config/Platform";

function PluginComponent() {
    const navigate = useNavigate();

    const getFormattedTime = () => {
        const now = new Date();
        now.setMinutes(now.getMinutes() + 2); // Add 2 minutes
    
        const pad = (num) => num.toString().padStart(2, "0");
    
        const year = now.getFullYear();
        const month = pad(now.getMonth() + 1);
        const day = pad(now.getDate());
        const hours = pad(now.getHours());
        const minutes = pad(now.getMinutes());
        // const seconds = pad(now.getSeconds());
    
        return `${year}${month}${day}${hours}${minutes}`;
    };
    

    const items = [
        {
            id: 1, label: 'Send', function: () => {
                core.notification.sendPush({
                    title: 'Push notification',
                    message: 'Send from React Vite',
                    callback: (res) => {
                        core.alertDialog("Result: " + res);
                    },
                });
            }
        },
        {
            id: 1, label: 'Schedule send', function: () => {
                core.notification.sendPushBySchedule({
                    title: 'Push notification',
                    message: 'Send schedule from React Vite',
                    dateTime: getFormattedTime(),
                    callback: (res) => {
                        core.alertDialog("Result: " + res);
                    },
                });
            }
        },
    ];

    return (
        <div>
            {/* AppBar Component */}
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    {/* Menu Icon */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => navigate('/plugin-list')}
                    >
                        <ArrowBackIcon />
                    </IconButton>

                    {/* App Title */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <b>Local Notification</b>
                    </Typography>
                </Toolbar>
            </AppBar>

            <div style={{ marginTop: 56 }}>
                <List>
                    {items.map((item) => (
                        <React.Fragment key={item.id}>
                            <ListItem onClick={item.function}>
                                <ListItemIcon><ForwardIcon /></ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </div>
        </div>
    );
}

export default PluginComponent;