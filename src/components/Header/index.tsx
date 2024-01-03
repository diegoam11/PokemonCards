import { Box, Grid, Typography } from "@mui/material";
import React from "react";

interface HeaderProps {
    title: string
    description: string
    element?: React.ReactNode | null
}

export const Header: React.FC<HeaderProps> = ({ title, description, element }) => {
    return (
        <>
            <Box sx={{ width: "100%", height: "350px"}}>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ height: "100%"}} >
                    <Grid item xs={6}>
                        <Grid container direction="column" justifyContent="center" alignItems="center" sx={{height: "100%"}}>
                            <Grid item>
                                <Typography variant="h2">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item sx={{mt: 1.5}}>
                                <Typography>
                                    {description}
                                </Typography>
                            </Grid>
                            {element !== undefined && (
                                <Grid item sx={{mt: 1.5, width: "70%"}}>
                                    {element}
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>

    )
}