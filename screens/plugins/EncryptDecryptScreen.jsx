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
            id: 1, label: 'Generate SHA', function: () => {
                core.encdec.generateSHA({
                    text: 'Hello World',
                    method: 'SHA-1',
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'Encrypt', function: () => {
                core.encdec.encrypt({
                    text: 'Hello World',
                    algorithm: 'AES',
                    mode: 'AES/CBC/PKCS7Padding',
                    iv: 'abcdefghijklmnop',
                    secretKey: 'SECRETKEYYYYYYYY',
                    callback: async (result) => {
                        await dialogPlugin.showAlertDialog("Information", result, openDialog);
                        core.encdec.decrypt({
                            text: JSON.parse(result).text,
                            algorithm: 'AES',
                            mode: 'AES/CBC/PKCS5Padding',
                            iv: 'abcdefghijklmnop',
                            secretKey: 'SECRETKEYYYYYYYY',
                            callback: (result) => {
                                dialogPlugin.showAlertDialog("Information", result, openDialog);
                            },
                        });
                    },
                });
            }
        },
        {
            id: 1, label: 'Decrypt', function: () => {
                core.encdec.decrypt({
                    text: 'value',
                    algorithm: 'AES',
                    mode: 'AES/CBC/PKCS5Padding',
                    iv: 'abcdefghijklmnop',
                    secretKey: 'SECRETKEYYYYYYYY',
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
                        <b>Encrypt & Decrypt</b>
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