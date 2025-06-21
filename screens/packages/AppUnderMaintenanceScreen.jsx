import { useNavigate } from "react-router-dom";
import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
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
import { platform, logger } from "../../config/Platform";

function PluginComponent() {
    const dialogPlugin = platform.getDialog();
    const navigate = useNavigate();
    const { openDialog } = useDialog();

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const items = [
        {
            id: 1, label: 'Request', function: () => {
                fetchData();
            }
        },
    ];

    const fetchData = async () => {
        try {
            const response = await fetch("https://raw.githubusercontent.com/pangphannarupp/ebook-data/main/app.json");
            if (!response.ok) throw new Error("Network response was not ok");
            const result = await response.json();
            logger.response("RESULT = ", JSON.stringify(result));
            dialogPlugin.showAlertDialog("Information", "Success", openDialog);
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {



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
                        onClick={() => navigate('/package-list')}
                    >
                        <ArrowBackIcon />
                    </IconButton>

                    {/* App Title */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <b>App Under Maintenance</b>
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