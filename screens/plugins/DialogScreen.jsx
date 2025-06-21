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

    const items = [
        {
            id: 1, label: 'Alert', function: () => {
                core.dialog.showAlert({
                    title: 'Alert',
                    message: 'Hello from React Vite in native dialog',
                    callback: (res) => {
                        core.alertDialog("Result: " + res);
                    },
                });
            }
        },
        {
            id: 2, label: 'Confirm', function: () => {
                core.dialog.showConfirm({
                    title: 'Confirm',
                    message: 'Hello from React Vite in native dialog',
                    confirmText: 'យល់ព្រម',
                    cancelText: 'ទេ',
                    callback: (res) => {
                        core.alertDialog("Result: " + res);
                    },
                });
            }
        },
        {
            id: 3, label: 'Show loading', function: () => {
                core.dialog.showLoading({
                    message: 'Hello from React Vite in native dialog',
                });

                setTimeout(function() {
                    core.dialog.hideLoading({});
                }, 3000);
            }
        },
        {
            id: 4, label: 'Hide loading', function: () => {
                core.dialog.hideLoading({});
            }
        },
        {
            id: 5, label: 'Date picker', function: () => {
                core.dialog.showDatePicker({
                    callback: (res) => {
                        core.alertDialog("Result: " + res);
                    },
                });
            }
        },
        {
            id: 6, label: 'Time picker', function: () => {
                core.dialog.showTimePicker({
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
                        <b>Dialog</b>
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