import React from "react";
import { CssBaseline } from "@material-ui/core";
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
            <CssBaseline/>
            <Navbar/>
            <main id={"content"}>
                {children}
            </main>
            <Footer/>
        </Providers>
  );
}
