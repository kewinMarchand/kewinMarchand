import React from "react";
import {
    AppBar,
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
        <section style={{background}}>
            <Container
                style={{paddingBottom: 96, paddingTop: 32}}
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
                <div style={{marginTop: 24}}>
                    {children}
                </div>
            </Container>
        </section>
    )
}