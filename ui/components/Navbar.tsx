import React from "react";
import {AppBar, Container, Toolbar, Typography} from "@material-ui/core";
import Link from "next/link";

export function Navbar(): React.ReactElement {
    return (
        <AppBar position={'sticky'} style={{marginBottom: 40}}>
            <Container component={"nav"}>
                <Toolbar disableGutters style={{justifyContent: "flex-end"}}>
                    <Link href={"/"}>
                        <a style={{padding: 8, cursor: "pointer"}}>
                            <Typography color={'inherit'}>
                                Accueil
                            </Typography>
                        </a>
                    </Link>
                </Toolbar>
            </Container>
        </AppBar>
    )
}