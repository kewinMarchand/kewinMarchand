import React, {useContext, useRef, useState} from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Typography
} from "@material-ui/core";
import {DeveloperContext, work} from "../../context/DeveloperContext";
import {Section} from "../../components/Section";

export function Works(): React.ReactElement {
    const {works} = useContext(DeveloperContext);

    return (
        <Section title={"Réalisations"} background={"white"}>
            <Grid container spacing={3}>
                {works.map((work, i) => (
                    <Grid item key={i} xs={12} md={6} lg={3}>
                        <Card
                            square
                            elevation={1}
                            style={{display: "flex", flexDirection: "column", height: "100%"}}
                        >
                            <CardHeader
                                title={`${work.name}${work.owner ? ", " + work.owner : ""}`}
                                subheader={work.type}
                            />
                            <CardContent style={{flexGrow: 1}}>
                                <Typography>
                                    {work.description}
                                </Typography>
                                <Typography>
                                    {work.mission}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href={work.link}
                                    title={`Voir le site ${work.name}`}
                                    target={"_blank"}
                                    rel={"noreferrer noopenner"}
                                >
                                    Voir le site
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Section>
    )
}