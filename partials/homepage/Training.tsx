import React from "react";
import {
    Container,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@material-ui/core";

type training = {
    date: string,
    course: string
}
const TRAININGS: training[] = [
    {
        date: "2016/2017",
        course: "Designer web, Afpa le Pontet (Titre professionnel de niveau III)."
    },
    {
        date: "2014/2015",
        course: "Les énergies renouvelables d'aujourd'hui et de demain, IRFEDD (Attestation compétences)."
    },
    {
        date: "2014",
        course: "DAO - Professionnaliser sa pratique, GRETA (Attestation compétences)."
    },
    {
        date: "1999/2005",
        course: "Aménagement de l'espace paysager, CFPPA Auzeville Tolosane (BEP, BAC pro, BTS)."
    },
]

function Training() {
    return (
        <Container component={"section"}>
            <header>
                <Typography variant={"h1"}>Formation</Typography>
            </header>
            <List disablePadding>
                {TRAININGS.map((training, i) => (
                    <ListItem disableGutters key={i}>
                        <ListItemText
                            primary={training.date}
                            secondary={training.course}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

export {Training}