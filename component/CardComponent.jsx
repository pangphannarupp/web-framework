import React from "react";
import {
    Grid,
    Paper,
    Typography,
} from "@mui/material";

const CardComponent = ({ item, index, callback }) => {
    return (
        <Grid item xs={6} sm={4} md={2} key={index}>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "100%", // 1:1 aspect ratio
                }}
            >
                <Paper
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        padding: 8,
                    }}
                    onClick={callback}
                >
                    <div style={{ marginBottom: 8 }}>
                        {item.icon}
                    </div>
                    <Typography variant="body1">{item.title}</Typography>
                    <Typography variant="body1">{item.description ?? ""}</Typography>
                </Paper>

            </div>

        </Grid>
    );
}

export default CardComponent;