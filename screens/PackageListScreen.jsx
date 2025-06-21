import { useNavigate } from "react-router-dom";
import React from 'react';
import { useDialog } from "../component/DialogContext";
import {
    AppBar, Toolbar,
    Typography,
    Grid,
    IconButton,
} from '@mui/material';
import AodIcon from '@mui/icons-material/Aod';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SecurityUpdateIcon from '@mui/icons-material/SecurityUpdate';
import CardComponent from "./../component/CardComponent";

import { platform } from "./../config/Platform";

function PackageListScreen() {
    const navigate = useNavigate();
    const { openDialog } = useDialog();
    const dialogPlugin = platform.getDialog();

    const items = [
        { id: 1, title: 'App Under Maintenance', icon: <EngineeringIcon />, navigate: () => navigate('/package-app-under-maintenace') },
        { id: 1, title: 'In-App Update', icon: <SecurityUpdateIcon />, navigate: () => navigate('/package-in-app-update') },
    ];


    const alert = (message) => {
        dialogPlugin.showAlertDialog("Information", message, openDialog);
    }

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
                        onClick={() => navigate('/')}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    {/* App Title */}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <b>Package</b>
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <div style={{ padding: 16, marginTop: 56 }}>
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <CardComponent item={item} index={index} key={index} callback={item.navigate} />
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default PackageListScreen;