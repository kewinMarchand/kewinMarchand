import React from "react";
import {CssBaseline} from "@material-ui/core";
import {AppHead} from "./layout/AppHead";
import {Providers} from "./layout/providers";
import {Navbar} from "./Navbar";
import {Footer} from "./Footer";

export function Layout({ children, title }: {children: React.ReactElement | React.ReactElement[], title: string}): React.ReactElement {
    return (
        <>
            <AppHead title={title}/>
            <Providers>
                <CssBaseline/>
                <a
                    href={"#content"}
                    className={"sr-only"}
                    title={"Accéder directement au contenu"}
                />
                <Navbar/>
                <main id={"content"}>
                    {children}
                </main>
                <Footer/>
            </Providers>
        </>
    )
}