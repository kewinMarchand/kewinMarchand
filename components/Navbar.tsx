import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import Link from "next/link";

export function Navbar() {
    return (
        <AppBar position={'relative'} component={"nav"}>
            <Toolbar>
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
                            À propos
                        </Typography>
                    </a>
                </Link>
            </Toolbar>
        </AppBar>
    )
}