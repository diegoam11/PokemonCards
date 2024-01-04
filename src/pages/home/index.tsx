import { Button, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Header } from "../../components/Header";
import { characters } from "../../api/characters";

export const Home: React.FC<{}> = () => {

    useEffect(() => {
        characters.getById(20).then(r => {
            console.log("primera vez")
            console.log(r.data)
        }).catch(e => {
            console.error(e)
        })
    })

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