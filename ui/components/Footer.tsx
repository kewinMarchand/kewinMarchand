import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";

export function Footer() {
    return (
        <AppBar position={'relative'} component={"footer"}>
            <Toolbar></Toolbar>
        </AppBar>
    )
}