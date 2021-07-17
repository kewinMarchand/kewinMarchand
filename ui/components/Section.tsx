import React from "react";
import {
    AppBar,
    Box,
    Container,
    Toolbar,
    Typography
} from "@material-ui/core";

type section = {
    children: React.ReactElement | React.ReactElement[],
    background?: string,
    title: string
}

export function Section({children, background = "transparent", title}: section): React.ReactElement {

    return (
        <Container
            component={"section"}
            style={{background, paddingBottom: 96, paddingTop: 32}}
        >
            <AppBar
                position={"sticky"}
                color={"transparent"}
                elevation={0}
            >
                <Toolbar disableGutters>
                    <Typography variant={"h1"}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box marginTop={5}>
                {children}
            </Box>
        </Container>
    )
}