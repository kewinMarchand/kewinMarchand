import React from "react";
import {
  AppBar, Card,
  CardContent,
  Toolbar,
  Typography
} from "@material-ui/core";

type section = {
    children: React.ReactElement | React.ReactElement[],
    title: string
}

export function Section ({ children, title }: section): React.ReactElement {
  return (
        <Card
            square
            component={"section"}
            style={{ marginBottom: 64, overflow: "visible" }}
        >
            <AppBar
                position={"sticky"}
                color={"transparent"}
                elevation={0}
            >
                <Toolbar disableGutters style={{ paddingLeft: 16 }}>
                    <Typography variant={"h1"}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <CardContent>
                <div style={{ marginTop: 24 }}>
                    {children}
                </div>
            </CardContent>
        </Card>
  );
}
