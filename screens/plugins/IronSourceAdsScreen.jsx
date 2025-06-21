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
                core.application.appInfo({
                    callback: (res) => {
                        const result = JSON.parse(res)
                        core.ironSourceAds.initialize({
                            appKey: result.os == 'Android' ? '1913250d5' : '18dbd193d',
                            callback: (res) => {
                                core.alertDialog("Result: " + res);
                            },
                        });
                    },
                });

                
            }
        },
        {
            id: 1, label: 'Load interstitial', function: () => {
                core.ironSourceAds.loadInterstitial({
                    callback: (res) => {
                        core.alertDialog("Result: " + res);
                    },
                });
            }
        },
        {
            id: 1, label: 'Show interstitial', function: () => {
                core.ironSourceAds.showInterstitial({
                    callback: (res) => {
                        core.alertDialog("Result: " + res);
                    },
                });
            }
        },
        {
            id: 1, label: 'Load rewarded video', function: () => {
                core.ironSourceAds.loadRewardedVideo({
                    callback: (res) => {
                        core.alertDialog("Result: " + res);
                    },
                });
            }
        },
        {
            id: 1, label: 'Show rewarded video', function: () => {
                core.ironSourceAds.showRewardedVideo({
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
                        <b>IronSource Ads</b>
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