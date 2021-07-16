import React from "react";
import {Navbar} from "./Navbar";
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import Head from "next/head";
import {theme} from "../theme/theme";
import {Footer} from "./Footer";

export function Layout({ children, title }: {children: React.ReactElement | React.ReactElement[], title: string}) {
    return (
        <>
            <Head>
                <title>Kewin Marchand - {title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <main>
                    <Navbar/>
                    {children}
                    <Footer/>
                </main>
            </ThemeProvider>
        </>
    )
}