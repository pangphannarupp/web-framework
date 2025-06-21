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
            id: 1, label: 'Share image', function: () => {
                core.file.openImageGallery({
                    callback: (res) => {
                        // core.alertDialog("Result: " + res);
                        core.device.shareImage({
                            imagePath: res.path,
                            callback: (response) => {
                                core.alertDialog("Result: " + response);
                            }
                        });
                    },
                });
            }
        },
        {
            id: 1, label: 'Share file', function: () => {
                core.file.openFileLibrary({
                    types: [],
                    callback: (res) => {
                        // core.alertDialog("Result: " + res);
                        core.device.shareFile({
                            filePath: res.path,
                            callback: (response) => {
                                core.alertDialog("Result: " + response);
                            }
                        });
                    },
                });
            }
        },
        {
            id: 1, label: 'Share text', function: () => {
                core.device.shareText({
                    text: 'Share text from React Vite',
                    callback: (res) => {
                        core.alertDialog("Result: " + res);
                    },
                });
            }
        },
        {
            id: 1, label: 'Share link', function: () => {
                core.device.shareLink({
                    title: 'YouTube',
                    link: 'https://youtube.com',
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
                        <b>Share</b>
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