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
import { logger, platform } from "../../config/Platform";

function PluginComponent() {
    const navigate = useNavigate();

    const items = [
        {
            id: 1, label: 'Get', function: () => {
                logger.request('Storage Get Request');
                core.storage.get({
                    key: 'websocket',
                    callback: (response) => {
                        logger.info('Get Response: ' + response);
                    }
                });
            }
        },
        {
            id: 2, label: 'Save', function: () => {
                core.storage.save({
                    key: 'userId',
                    value: '123456',
                    callback: (response) => {
                        logger.info('Get Response: ' + response);
                    }
                });
            }
        },
        {
            id: 3, label: 'Update', function: () => {
                core.storage.update({
                    key: 'userId',
                    value: '654321',
                    callback: (response) => {
                        logger.info('Get Response: ' + response);
                    }
                });
            }
        },
        {
            id: 4, label: 'Remove', function: () => {
                core.storage.remove({
                    key: 'userId',
                    callback: (response) => {
                        logger.info('Get Response: ' + response);
                    }
                });
            }
        },
        {
            id: 5, label: 'Clear', function: () => {
                core.storage.clear({
                    callback: (response) => {
                        logger.info('Get Response: ' + response);
                    }
                });
            }
        },
        {
            id: 6, label: 'Get All', function: () => {
                core.storage.getAll({
                    callback: (response) => {
                        logger.info('Get Response: ' + response);
                    }
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
                        <b>Storage</b>
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