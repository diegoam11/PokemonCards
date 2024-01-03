import { Button, Container } from "@mui/material";
import React from "react";
import { Header } from "../../components/Header";

export const Home: React.FC<{}> = () => {
    return (
        <Container maxWidth="xl">
            <Header title="Hello world" description="Hello world" element={
                <Button fullWidth variant="contained">
                    Click me!
                </Button>
            }></Header>
        </Container>
    )
}