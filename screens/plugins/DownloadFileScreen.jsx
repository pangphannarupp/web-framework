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

    const items = [
        {
            id: 1, label: 'Download one file', function: async () => {
                const result = await plugin.downloadOneFile({
                    downloadUrl: 'https://css4.pub/2015/icelandic/dictionary.pdf',
                    downloadTitle: 'សៀវភៅវចនានុក្រម',
                    downloadDescription: 'កំពុងទាញយក...',
                    fileName: 'dictionary.pdf',
                    downloadPath: 'download/ebook/'
                });
                logger.info(JSON.stringify(result));
                await dialogPlugin.showAlertDialog("Information", JSON.stringify(result), openDialog);

                // open pdf
                core.file.openPdf({
                    filePath: result.file_path,
                    pathType: 'absolute',
                    canShare: true,
                })
            }
        },
        {
            id: 2, label: 'Download multiple file', function: async () => {
                core.network.downloadMultipleFiles({
                    list: [
                        {
                            downloadUrl: 'https://css4.pub/2015/icelandic/dictionary.pdf',
                            downloadTitle: 'សៀវភៅវចនានុក្រម',
                            downloadDescription: 'កំពុងទាញយក...',
                            fileName: 'dictionary1.pdf',
                            downloadPath: 'download/ebook/'
                        },
                        {
                            downloadUrl: 'https://css4.pub/2015/icelandic/dictionary.pdf',
                            downloadTitle: 'សៀវភៅវចនានុក្រម',
                            downloadDescription: 'កំពុងទាញយក...',
                            fileName: 'dictionary2.pdf',
                            downloadPath: 'download/ebook/'
                        },
                        {
                            downloadUrl: 'https://css4.pub/2015/icelandic/dictionary.pdf',
                            downloadTitle: 'សៀវភៅវចនានុក្រម',
                            downloadDescription: 'កំពុងទាញយក...',
                            fileName: 'dictionary3.pdf',
                            downloadPath: 'download/ebook/'
                        },
                    ],
                    callback: function(response) {
                        logger.info(JSON.stringify(response));
                        dialogPlugin.showAlertDialog("Information", JSON.stringify(response), openDialog);
                    }
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
                        <b>Download File</b>
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