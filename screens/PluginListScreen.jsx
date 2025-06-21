import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
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
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import CampaignIcon from '@mui/icons-material/Campaign';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContrastIcon from '@mui/icons-material/Contrast';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import DnsIcon from '@mui/icons-material/Dns';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import HomeIcon from '@mui/icons-material/Home';
import HttpsIcon from '@mui/icons-material/Https';
import MapIcon from '@mui/icons-material/Map';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PestControlIcon from '@mui/icons-material/PestControl';
import IosShareIcon from '@mui/icons-material/IosShare';
import ScreenLockLandscapeIcon from '@mui/icons-material/ScreenLockLandscape';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import SmsIcon from '@mui/icons-material/Sms';
import SourceIcon from '@mui/icons-material/Source';
import StorageIcon from '@mui/icons-material/Storage';
import TextsmsIcon from '@mui/icons-material/Textsms';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import WebIcon from '@mui/icons-material/Web';
import CardComponent from "./../component/CardComponent";

import { logger, platform } from "./../config/Platform";
import { useGlobalState } from "../../state/GlobalStateContext";
import { use } from "react";

function PluginListScreen() {
    const navigate = useNavigate();
    const { openDialog } = useDialog();
    const dialogPlugin = platform.getDialog();
    const { socket, socketCode } = useGlobalState();

    const items = [
        { id: 1, title: 'Adcolony Ads', icon: <HomeIcon />, navigate: () => navigate('/plugin-app-info') },
        //
        { id: 1, title: 'Admob Ads', icon: <RequestQuoteIcon />, navigate: () => navigate('/plugin-admob-ads') },
        //
        { id: 1, title: 'Application', icon: <AppsIcon />, navigate: () => navigate('/plugin-app-info') },
        { id: 1, title: 'Apple Sign-In', icon: <CloseIcon />, navigate: () => navigate('/plugin-app-info') },
        //
        { id: 2, title: 'Biometric', icon: <FingerprintIcon />, navigate: () => navigate('/plugin-biometric') },
        { id: 2, title: 'Bluetooth', icon: <CloseIcon />, navigate: () => navigate('/plugin-biometric') },
        { id: 2, title: 'Blur Overlay', icon: <CloseIcon />, navigate: () => navigate('/plugin-biometric') },
        { id: 2, title: 'Brightness', icon: <CloseIcon />, navigate: () => navigate('/plugin-biometric') },
        { id: 2, title: 'Contact', icon: <CloseIcon />, navigate: () => navigate('/plugin-biometric') },
        //
        { id: 3, title: 'Camera', icon: <CameraAltIcon />, navigate: () => navigate('/plugin-camera') },
        { id: 3, title: 'Chartboost Ads', icon: <CloseIcon />, navigate: () => navigate('/plugin-camera') },
        // { id: 3, title: 'Content', icon: <CloseIcon />, navigate: () => alert("Not available") },
        //
        { id: 3, title: 'Copy to clipboard', icon: <ContentCopyIcon />, navigate: () => navigate('/plugin-copy-to-clipboard') },
        { id: 3, title: 'Monitor clipboard', icon: <CloseIcon />, navigate: () => navigate('/plugin-camera') },
        // { id: 3, title: 'Download Theme', icon: <CloseIcon />, navigate: () => alert("Not available") },
        //
        { id: 3, title: 'Dialog', icon: <TextsmsIcon />, navigate: () => navigate('/plugin-dialog') },
        //
        { id: 4, title: 'Download File', icon: <FileDownloadIcon />, navigate: () => navigate('/plugin-download-file') },
        //
        { id: 4, title: 'Encrypt & Decrypt', icon: <HttpsIcon />, navigate: () => navigate('/plugin-encrypt-decrypt') },
        //
        { id: 5, title: 'External Browser', icon: <TravelExploreIcon />, navigate: () => navigate('/plugin-external-browser') },
        //
        { id: 5, title: 'External Map Viewer', icon: <MapIcon />, navigate: () => navigate('/plugin-external-map') },
        //
        { id: 5, title: 'Face Up/Down', icon: <AssignmentIndIcon />, navigate: () => navigate('/plugin-face-updown') },
        { id: 5, title: 'Facebook Easy Ads', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        { id: 5, title: 'File', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        //
        { id: 5, title: 'File Browser', icon: <SourceIcon />, navigate: () => navigate('/plugin-file-browser') },
        //
        { id: 5, title: 'Firebase Remote Config', icon: <SettingsRemoteIcon />, navigate: () => navigate('/plugin-firebase-remote-config') },
        { id: 5, title: 'Google Sign-In', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        //
        { id: 5, title: 'GPS', icon: <GpsFixedIcon />, navigate: () => navigate('/plugin-gps') },
        { id: 5, title: 'Huawei PushKit', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        { id: 5, title: 'Image Viewer', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        //
        { id: 5, title: 'Internal Browser', icon: <WebIcon />, navigate: () => navigate('/plugin-internal-browser') },
        //
        { id: 5, title: 'Ironsource Ads', icon: <RequestQuoteIcon />, navigate: () => navigate('/plugin-iron-source-ads') },
        //
        { id: 5, title: 'IP Address', icon: <DnsIcon />, navigate: () => navigate('/plugin-ip-address') },
        //
        { id: 5, title: 'Local Notification', icon: <CampaignIcon />, navigate: () => navigate('/plugin-local-notification') },
        { id: 5, title: 'Locale', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        //
        { id: 5, title: 'Logger', icon: <PestControlIcon />, navigate: () => navigate('/plugin-logger') },
        { id: 5, title: 'MP3 Player', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        //
        { id: 5, title: 'ML Kit Document Scanner', icon: <DocumentScannerIcon />, navigate: () => navigate('/plugin-mlkit-scanner') },
        //
        { id: 5, title: 'Network Info', icon: <CellWifiIcon />, navigate: () => navigate('/plugin-network-information') },
        //
        { id: 5, title: 'Notification', icon: <NotificationsActiveIcon />, navigate: () => navigate('/plugin-notification') },
        //
        { id: 5, title: 'Orientation', icon: <ScreenLockLandscapeIcon />, navigate: () => navigate('/plugin-orientation') },
        { id: 5, title: 'Phone', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        { id: 5, title: 'Phone Number', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        { id: 5, title: 'Sample SwiftUI/Compose', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        //
        { id: 5, title: 'SAMPLE', icon: <AodIcon />, navigate: () => navigate('/plugin-sample') },
        { id: 5, title: 'Screenshot', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        //
        { id: 5, title: 'Share', icon: <IosShareIcon />, navigate: () => navigate('/plugin-share') },
        { id: 5, title: 'Share File', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        { id: 5, title: 'Shortcut', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        //
        { id: 5, title: 'SMS Retriever', icon: <SmsIcon />, navigate: () => navigate('/plugin-sms-retriever') },
        //
        { id: 5, title: 'Speech recognizer', icon: <VoiceChatIcon />, navigate: () => navigate('/plugin-speech-recognizer') },
        //
        { id: 5, title: 'SQLite', icon: <StorageIcon />, navigate: () => navigate('/plugin-sqlite') },
        { id: 5, title: 'StartApp Ads', icon: <CloseIcon />, navigate: () => navigate('/plugin-external-browser') },
        //
        { id: 5, title: 'Storage', icon: <StorageIcon />, navigate: () => navigate('/plugin-storage') },
        //
        { id: 5, title: 'Theme Mode', icon: <ContrastIcon />, navigate: () => navigate('/plugin-theme-mode') },
        //
        { id: 8, title: 'Toast', icon: <TextsmsIcon />, navigate: () => navigate('/plugin-toast') },
        { id: 9, title: 'Tapjoy Ads', icon: <CloseIcon />, navigate: () => navigate('/plugin-unity-ads') },
        //
        { id: 9, title: 'Unity Ads: Initialize', icon: <RequestQuoteIcon />, navigate: () => navigate('/plugin-unity-ads') },
        { id: 10, title: 'Vungle Ads', icon: <CloseIcon />, navigate: () => navigate('/plugin-unity-ads-interstitial') },
    ];


    const alert = (message) => {
        dialogPlugin.showAlertDialog("Information", message, openDialog);
    }

    useEffect(() => {

        logger.initSocket(socket, socketCode);

        return () => {
        
        }
    }, []);

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
                        <b>Plugins</b>
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

export default PluginListScreen;