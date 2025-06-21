import { useNavigate } from "react-router-dom";
import React from 'react';
import { useEffect } from "react";
import {
    AppBar, Toolbar, Button,
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
import { platform, logger } from "../../config/Platform";

function PluginComponent() {
    const applicationPlugin = platform.getApplication();
    const dialogPlugin = platform.getDialog();

    const navigate = useNavigate();
    const { openDialog } = useDialog();


    const items = [
        {
            id: 1, label: 'Exit', function: () => {
                applicationPlugin.exitApp();
            }
        },
        {
            id: 2, label: 'Finish', function: () => {
                core.application.finish();
            }
        },
        {
            id: 3, label: 'Restart', function: () => {
                applicationPlugin.restartApp();
            }
        },
        {
            id: 4, label: 'Open app setting', function: async () => {
                const result = await applicationPlugin.openAppSetting();
                dialogPlugin.showAlertDialog("Information", JSON.stringify(result), openDialog);
            }
        },
        {
            id: 5, label: 'Battery Level', function: () => {
                core.application.batteryLevel({
                    callback: (res) => {
                        core.dialog.alertDialog("Result: " + res);
                    },
                });
            }
        },
        {
            id: 6, label: 'Increase volume', function: () => {
                core.application.increaseVolume();
            }
        },
        {
            id: 7, label: 'Decrease volume', function: () => {
                core.application.decreaseVolume();
            }
        },
        {
            id: 8, label: 'App info', function: async () => {
                // applicationPlugin.getAppInfo({
                //     onSuccess: (res) => {
                //         dialogPlugin.showAlertDialog("Result: " + JSON.stringify(res));
                //     },
                //     onError: (err) => {
                //         dialogPlugin.showAlertDialog("Error: " + JSON.stringify(err));
                //     },
                // });
                const appInfo = await applicationPlugin.getAppInfo();
                logger.info(JSON.stringify(appInfo));
                dialogPlugin.showAlertDialog("Information", JSON.stringify(appInfo), openDialog);
            }
        },
    ];

    useEffect(() => {
        // This runs once when the component mounts (like Vue's onMounted)
        logger.info("React Component Mounted");

        return () => {
            // Cleanup when component unmounts (like Vue's onUnmounted)
            logger.info("React Component Unmounted");
        };
    }, []); // Empty dependency array means it runs only once

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
                        <b>Application Information</b>
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