import React from "react";
import {
    Container,
    Typography
} from "@material-ui/core";

type section = {
    children: React.ReactElement | React.ReactElement[],
    background?: string,
    title: string
}

export function Section({children, background = "transparent", title}: section): React.ReactElement {

    return (
        <Container component={"section"} style={{background}}>
            <header>
                <Typography variant={"h1"}>
                    {title}
                </Typography>
            </header>
            {children}
        </Container>
    )
}