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
            id: 1, label: 'Open database', function: () => {
                core.sqlite.openDatabase({
                    databaseName: 'react-database.db',
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'Close database', function: () => {
                core.sqlite.closeDatabase({
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'Begin transaction', function: () => {
                core.sqlite.beginTransaction({
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'End transaction', function: () => {
                core.sqlite.endTransaction({
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'Create table', function: () => {
                core.sqlite.executeSql({
                    statement: 'CREATE TABLE IF NOT EXISTS users(userId VARCHAR NOT NULL PRIMARY KEY ON CONFLICT REPLACE, userName VARCHAR(225) NOT NULL, userPosition VARCHAR(225) NOT NULL )',
                    bindData: [],
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'Insert', function: () => {
                core.sqlite.executeSql({
                    statement: 'INSERT INTO users(userId, userName, userPosition) VALUES(?,?,?)',
                    bindData: ['userId-' + randomNumberInRange(1, 1000), 'Phanna', 'Android Developer'],
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'Update', function: () => {
                core.sqlite.executeSql({
                    statement: 'UPDATE users SET userId = ?,userName = ?,userPosition = ? WHERE userName = ?',
                    bindData: ['userId-1111', 'Phanna', 'iOS Developer', 'Phanna'],
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'Delete', function: () => {
                core.sqlite.executeSql({
                    statement: 'DELETE FROM users WHERE userName = ?',
                    bindData: ['Phanna'],
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'Select', function: () => {
                core.sqlite.executeSqlSelect({
                    statement: 'SELECT * FROM users',
                    bindData: [],
                    callback: (result) => {
                        dialogPlugin.showAlertDialog("Information", result, openDialog);
                    },
                });
            }
        },
        {
            id: 1, label: 'Search', function: () => {
                core.sqlite.executeSqlSelect({
                    statement: 'SELECT * FROM users WHERE userPosition LIKE ?',
                    bindData: ['%iOS%'],
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
                        <b>SQLite</b>
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