import React, { useContext } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography
} from "@material-ui/core";
import { DeveloperContext } from "../../contexts/DeveloperContext";
import { Section } from "../../components/Section";

export function Works (): React.ReactElement {
  const { works } = useContext(DeveloperContext);

  return (
        <Section title={"Réalisations"}>
            <Grid container spacing={3}>
                {works.map((work, i) => (
                    <Grid item key={i} xs={12} md={6} lg={4}>
                        <Card
                            square
                            elevation={1}
                            style={{ display: "flex", flexDirection: "column", height: "100%" }}
                        >

                            <CardHeader
                                title={`${work.name}${work.owner ? ", " + work.owner : ""}`}
                                subheader={work.type}
                            />

                            <CardContent style={{ flexGrow: 1 }}>
                                <Typography variant={"caption"} gutterBottom>
                                    {work.description}
                                </Typography>
                                <Typography gutterBottom>
                                    {work.mission}
                                </Typography>
                                <Typography variant={"caption"}>
                                    {work.technos.map((techno, i) => `${techno}${i !== work.technos.length - 1 ? "," : ""} `)}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href={work.link}
                                    title={`Voir le site ${work.name}`}
                                    target={"_blank"}
                                    rel={"noreferrer noopenner"}
                                    size={"small"}
                                >
                                    Voir le site
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Section>
  );
}
