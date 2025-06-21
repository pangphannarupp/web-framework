import { useNavigate } from "react-router-dom";
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
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
    const dialogPlugin = platform.getDialog();
    const { openDialog } = useDialog();

    const [num, setNum] = useState(0);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const items = [
        {
            id: 1, label: 'Record', function: () => {
                core.logger.record({
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'Stop', function: () => {
                core.logger.stop({
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'Clear', function: () => {
                core.logger.clear({
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'Show', function: () => {
                core.logger.show({
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
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
                        <b>Logger</b>
                    </Typography>
                </Toolbar>
            </AppBar>

            <div style={{ marginTop: 56 }}>
                <List>
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
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