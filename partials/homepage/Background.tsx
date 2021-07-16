import React, { Fragment } from "react";
import {
    Container,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    Typography
} from "@material-ui/core";

type background = {
    categorie: string,
    content: {date: string, job: string}[]
}
const BACKGROUNDS: background[] = [
    {
        categorie: "💻 Développement web",
        content: [
            {
                date: "08/2018 à aujourd'hui",
                job: "Intégrateur et développeur Front-End (Purjus Communication)."
            },
            {
                date: "09/2017 à 08/2018",
                job: "Formateur Infographiste en multimédia (AFPA Avigon le Pontet)."
            },
            {
                date: "05/2017 à 09/2017",
                job: "Intégrateur web (Agence Hors Pistes et Freelance)."
            }
        ]
    },
    {
        categorie: "🌳 Paysagisme",
        content: [
            {
                date: "04/2015 à 05/2017",
                job: "Infographiste paysager (Star's Jardin, Thibaud de Beschart)."
            },
            {
                date: "05/2005 à 03/2013",
                job: "Ouvrier paysagiste qualifié (Indépendant, ManieBat, Jardins Sestian)."
            },
            {
                date: "05/2017 à 09/2017",
                job: "Intégrateur web (Agence Hors Pistes et Freelance)."
            }
        ]
    }
]

function Background() {
    return (
        <Container component={"section"}>
            <header>
                <Typography variant={"h1"}>Parcours</Typography>
            </header>
            <List disablePadding>
                {BACKGROUNDS.map((background, i) => (
                    <Fragment key={i}>
                        <ListSubheader disableGutters disableSticky>{background.categorie} :</ListSubheader>
                        {background.content.map((content, i) => (
                            <ListItem disableGutters key={i}>
                                <ListItemText
                                    primary={content.date}
                                    secondary={content.job}
                                />
                            </ListItem>
                        ))}
                        {0 === i && <Divider/>}
                    </Fragment>
                ))}
            </List>
        </Container>
    )
}

export {Background}