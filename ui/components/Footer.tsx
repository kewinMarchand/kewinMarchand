import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";

export function Footer(): React.ReactElement {
    return (
        <AppBar position={'relative'} component={"footer"}>
            <Toolbar/>
        </AppBar>
    )
}