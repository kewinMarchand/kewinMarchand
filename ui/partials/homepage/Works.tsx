import React, {useContext} from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Tooltip,
    Typography
} from "@material-ui/core";
import {DeveloperContext} from "../../context/DeveloperContext";
import {Section} from "../../components/Section";

export function Works(): React.ReactElement {
    const {works} = useContext(DeveloperContext);

    return (
        <Section title={"Réalisations"}>
            <Grid container spacing={3}>
                {works.map((work, i) => (
                    <Grid item key={i} xs={12} md={6} lg={4}>
                        <Card
                            square
                            elevation={0}
                            style={{display: "flex", flexDirection: "column", height: "100%"}}
                        >
                            <Tooltip title={work.description} placement={"top"} arrow>
                                <CardHeader
                                    title={`${work.name}${work.owner ? ", " + work.owner : ""}`}
                                    subheader={work.type}
                                />
                            </Tooltip>
                            <CardContent style={{flexGrow: 1}}>
                                <Typography gutterBottom>
                                    {work.mission}
                                </Typography>
                                <Typography variant={"caption"}>
                                    {work.technos.map(((techno, i) => `${techno}${i !== work.technos.length - 1 ? "," : ""} `))}
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
    )
}