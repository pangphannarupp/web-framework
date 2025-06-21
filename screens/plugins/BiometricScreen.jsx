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
    const biometricPlugin = platform.getBiometric();
    const dialogPlugin = platform.getDialog();
    const navigate = useNavigate();
    const { openDialog } = useDialog();

    const items = [
        {
            id: 1, label: 'Biometric', function: async () => {
                // biometricPlugin.showBiometricPrompt({
                //     param: {
                //         title: 'Verify it\'s you',
                //         description: 'Use your biometric to continue',
                //         cancel_text: 'Cancel',
                //     },
                //     onSuccess: (res) => {
                //         dialogPlugin.showAlertDialog("Result: " + JSON.stringify(res));
                //     },
                //     onError: (err) => {
                //         cdialogPlugin.showAlertDialog("Error: " + JSON.stringify(err));
                //     },
                // });

                const result = await biometricPlugin.showBiometricPrompt({
                    param: {
                        title: 'Verify it\'s you',
                        description: 'Use your biometric to continue',
                        cancel_text: 'Cancel',
                    },
                });
                logger.info(JSON.stringify(result));
                dialogPlugin.showAlertDialog("Information", JSON.stringify(result), openDialog);
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
                        <b>Biometric</b>
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