import { Box, Button, Container, Grid, Paper, TextField, Typography, useRadioGroup } from "@mui/material";
import React, { useState } from "react";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";

interface Credentials {
    username: string
    password: string
}

const INITIAL_STATE = {
    username: "",
    password: ""
}

export const Login: React.FC<{}> = () => {

    const [credentials, setCredentials] = useState<Credentials>(INITIAL_STATE)
    const { getError, getSuccess} = useNotification()


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        LoginValidate.validate(credentials).then(() => {
            getSuccess(JSON.stringify(credentials))
        }).catch((error) => {
            getError(error.message)
        })
        
    }

    return (
        <Container maxWidth="sm">
            <Grid container direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "90vh" }}>
                <Grid item>
                    <Paper sx={{ padding: "1.3em" }}>
                        <Typography variant="h4" sx={{ mt: 1, mb: 1, textAlign: "center" }}>
                            Iniciar Sesión
                        </Typography>
                        <Box onSubmit={handleSubmit} component="form">
                            <TextField onChange={handleChange} name="username" margin="normal" fullWidth type="text" label="usuario" sx={{ mt: 2, mb: 1 }} required>
                            </TextField>
                            <TextField onChange={handleChange} name="password" margin="normal" fullWidth type="password" label="contraseña" sx={{ mt: 1, mb: 1 }} required>
                            </TextField>
                            <Button fullWidth variant="contained" type="submit" sx={{ mt: 1, mb: 2 }}>
                                Iniciar sesión
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}