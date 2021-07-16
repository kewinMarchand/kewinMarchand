import React from "react";
import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";
import Link from "next/link";

export function Navbar() {
    return (
        <AppBar position={'sticky'} style={{marginBottom: 40}}>
            <Container component={"nav"}>
                <Toolbar style={{justifyContent: "flex-end"}}>
                    <Link href="/">
                        <a style={{padding: 8}}>
                            <Typography color={'inherit'}>
                                Accueil
                            </Typography>
                        </a>
                    </Link>
                    <Link href="/about">
                        <a style={{padding: 8}}>
                            <Typography color={'inherit'}>
                                À propos de cette page
                            </Typography>
                        </a>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}