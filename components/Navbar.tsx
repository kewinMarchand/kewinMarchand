import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import Link from "next/link";

export function Navbar() {
    return (
        <AppBar position={'relative'}>
            <Toolbar>
                <Link href="/">
                    <a>
                        <Typography color={'textPrimary'}>
                            Accueil
                        </Typography>
                    </a>
                </Link>
                <Link href="/about">
                    <a>
                        <Typography color={'textPrimary'}>
                            À propos
                        </Typography>
                    </a>
                </Link>
            </Toolbar>
        </AppBar>
    )
}