import React from "react";
import {
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@material-ui/core";
import {CheckBoxRounded} from '@material-ui/icons';

const SKILLS: string[] = [
    "Utilisations quotidienne des principaux frameworks JS, principalement React mais aussi Vue, Svelte, Angular. 💪💪💪",
    "Recherche et mise en place de packages NPM, veille portant sur les nouveaux plugins et frameworks ui. 💪💪💪",
    "HTML, TWIG. 💪💪💪",
    "CSS, SASS, JSS. 💪💪💪",
    "Vanilla JS, Typescript. 💪💪💪",
    "Sites responsives, mobile first. 💪💪💪",
    "Animations CSS, SVG, React. 💪💪💪",
    "Code review. 💪💪💪",
    "Attention portée aux problématiques liées à l'accessibilité et à la RGPD. 💪💪",
    "Ecriture de fonctions de tests unitaires, CodeceptJs. 💪",
    "Applications mobile React native. 💪",
    "Environnement: Docker, Symfony, Sonata, React admin, Node, Next, Redux... 💪"
]

function Skills() {
    return (
        <Container component={"section"}>
            <header>
                <Typography variant={"h1"}>
                    Compétences
                </Typography>
            </header>
            <List disablePadding>
                {SKILLS.map((skill, i) => (
                    <ListItem disableGutters key={i}>
                        <ListItemIcon>
                            <CheckBoxRounded color={"primary"}/>
                        </ListItemIcon>
                        <ListItemText>
                            {skill}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}

export {Skills}