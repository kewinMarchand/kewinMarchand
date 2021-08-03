import React, { useContext } from "react";
import {
  AppBar,
  Card,
  CardContent,
  Divider,
  Toolbar,
  Typography
} from "@material-ui/core";
import { DeveloperContext } from "../../contexts/DeveloperContext";

export function Header (): React.ReactElement {
  const { developer } = useContext(DeveloperContext);

  return (
        <Card
            square
            component={"header"}
            style={{ marginBottom: 64, overflow: "visible" }}
        >
            <AppBar
                position={"sticky"}
                color={"transparent"}
                elevation={0}
            >
                <Toolbar disableGutters style={{ paddingLeft: 16 }}>
                    <Typography
                        variant={"h1"}
                        gutterBottom
                    >
                        {developer.name}
                    </Typography>
                </Toolbar>
            </AppBar>
            <CardContent>
                <Typography
                    variant={"h2"}
                    gutterBottom
                >
                    {developer.job}
                </Typography>
                <Typography gutterBottom>
                    {developer.getAge(developer.birthdate)}
                </Typography>
                <a
                    href={"https://goo.gl/maps/C3RDSNnbZbZSxzzQ8"}
                    title={"Me situer sur google map"}
                    target={"_blank"}
                    rel={"noreferrer noopenner"}
                >
                    {developer.city}
                </a>

                <Divider/>
                <Typography>
                    {developer.mission}
                </Typography>
            </CardContent>
        </Card>
  );
}
