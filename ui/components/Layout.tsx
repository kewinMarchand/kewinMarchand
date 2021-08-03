import React from "react";
import { CssBaseline } from "@material-ui/core";
import { AppHead } from "./layout/AppHead";
import { Providers } from "./layout/Providers";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type LayoutType = {
    children: React.ReactElement | React.ReactElement[],
    title: string
};

export function Layout ({ children, title }: LayoutType): React.ReactElement {
  return (
        <Providers>
            <AppHead title={title}/>
            <CssBaseline/>
            <Navbar/>
            <main id={"content"}>
                {children}
            </main>
            <Footer/>
        </Providers>
  );
}
