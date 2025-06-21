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
    const plugin = platform.getNetwork();
    const dialogPlugin = platform.getDialog();
    const navigate = useNavigate();
    const { openDialog } = useDialog();


    const onNetworkStatusChange = (response) => {
        dialogPlugin.showAlertDialog("Event Information", response, openDialog);
    }

    const items = [
        {
            id: 1, label: 'Network information', function: async () => {
                const result = await plugin.getInformation();
                logger.info(JSON.stringify(result));
                dialogPlugin.showAlertDialog("Information", JSON.stringify(result), openDialog);
            }
        },
    ];

    useEffect(() => {
        core.addEventListener('onNetworkStatusChange', onNetworkStatusChange);

        return () => {
            core.removeEventListener('onNetworkStatusChange', onNetworkStatusChange);
        }
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
                        <b>Netork Information</b>
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