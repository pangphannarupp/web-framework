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
            id: 1, label: 'Initialize', function: () => {
                core.admob.initialize({});
            }
        },
        {
            id: 2, label: 'Show interstitial', function: () => {
                core.admob.showInterstitial({
                    adUnitId: 'ca-app-pub-3940256099942544/1033173712'
                });
            }
        },
        {
            id: 2, label: 'Show rewarded interstitial', function: () => {
                core.admob.showRewardedInterstitial({
                    adUnitId: 'ca-app-pub-3940256099942544/5354046379'
                });
            }
        },
        {
            id: 1, label: 'Show rewarded video', function: () => {
                core.admob.showRewarded({
                    adUnitId: 'ca-app-pub-3940256099942544/5224354917'
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
                        <b>Admob Ads</b>
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