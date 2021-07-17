import React from "react";
import {CssBaseline, ThemeProvider} from "@material-ui/core";
import Head from "next/head";
import {UiProvider} from "../context/UiContext";
import {theme} from "../theme/theme";
import {Navbar} from "./Navbar";
import {Footer} from "./Footer";
import {DataProvider} from "../context/DataContext";

export function Layout({ children, title }: {children: React.ReactElement | React.ReactElement[], title: string}) {
    return (
        <>
            <Head>
                <title>Kewin Marchand - {title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CssBaseline/>
            <DataProvider>
                <ThemeProvider theme={theme}>
                    <UiProvider>
                        <main>
                            <a href="#content" className={"sr-only"} title={"Accéder directement au contenu"}>Contenu</a>
                            <Navbar/>
                            {children}
                            <Footer/>
                        </main>
                    </UiProvider>
                </ThemeProvider>
            </DataProvider>
        </>
    )
}