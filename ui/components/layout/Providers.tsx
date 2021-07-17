import React from "react";
import {theme} from "../../theme/theme";
import {ThemeProvider} from "@material-ui/core";
import {UiProvider} from "../../context/UiContext";

export function Providers({ children }: {children: React.ReactElement | React.ReactElement[]}): React.ReactElement {
    return (
        <ThemeProvider theme={theme}>
            <UiProvider>
                {children}
            </UiProvider>
        </ThemeProvider>
    )
}