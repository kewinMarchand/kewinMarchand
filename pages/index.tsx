import React, { Fragment } from "react";
import {Layout} from "../components/Layout";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container, Divider,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography
} from "@material-ui/core";
import {CheckBoxRounded} from '@material-ui/icons';

const SKILLS: string[] = [
    "Utilisations quotidienne des principaux frameworks JS, principalement React mais aussi Vue, Svelte, Angular. 💪💪💪",
    "Recherche et mise en place de packages NPM, veille portant sur les nouveaux plugins et frameworks Ui. 💪💪💪",
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

type work = {
    name: string,
    type: string,
    owner?: string,
    link: string,
    description: string,
    mission: string
}
const WORKS: work[] = [
    {
        name: "RRG",
        type: "Site e-commerce",
        owner: "groupe Renault",
        link: "https://www.renault-retail-group.fr/",
        description: "Achat et réservation de véhicules et accessoires automobile.",
        mission: "Maintenance et migration des anciennes pages, intégration et développement React."
    },
    {
        name: "RRG RH",
        type: "Site de recrutement",
        owner: "groupe Renault",
        link: "https://jobsfrance.renaultretailgroup.com/",
        description: "Site dédié à la consultation des annonces d'emplois de la société et aux dépots des candidatures.",
        mission: "Intégration et développement TWIG, SASS et Vue JS from scratch."
    },
    {
        name: "Sodicam²",
        type: "Site de recrutement",
        owner: "groupe Renault",
        link: "https://sodicam2.fr/",
        description: "Société de Distribution pour la Chimie, l'Automobile et la Mécanique chargée de la commercialisation et de l'animation des pièces, accessoires et services après-vente automobile.",
        mission: "Intégration et développement TWIG, SASS et Vanilla JS from scratch."
    },
    {
        name: "Facets",
        type: "Site vitrine multilingue",
        link: "https://facets.fr/fr",
        description: "Agence événementielle.",
        mission: "Intégration et développement Next, React, Framer from scratch."
    },
    {
        name: "Oreca events",
        type: "Site vitrine multilingue",
        link: "https://oreca-events.com/fr",
        description: "Agence expérientielle automobile.",
        mission: "Intégration et développement Next, React, Framer from scratch."
    },
    {
        name: "Datagora",
        type: "Applications web",
        link: "https://datagora.fr/",
        description: "Sous la forme d’un fil d'actualité, la plateforme Datagora vous propose des dépêches synthétiques - les datapoints - qui mettent en avant les résultats clés de publications provenant d'instituts statistiques, d'études ou de recherche.",
        mission: "Intégration et développement React from scratch."
    },
    {
        name: "Datagora",
        type: "Applications mobile",
        link: "https://play.google.com/store/apps/details?id=com.datagora&hl=en_SG&gl=US",
        description: "",
        mission: "Intégration et développement React native from scratch."
    },
    {
        name: "Dépamoto",
        type: "Site e-commerce",
        link: "https://depamoto.com/fr-FR/home",
        description: "Vente de moto et pièces détrachées en ligne.",
        mission: "Participation à l'intégration du site TWIG et Vue js."
    },
    {
        name: "AD13",
        type: "Site vitrine",
        link: "https://comites-feux.com/",
        description: "Association Départementale des Comités Communaux Feux de Forêts et des Réserves Communales de Sécurité Civile des Bouches du Rhône.",
        mission: "Intégration et développement React et React admin from scratch."
    },
    {
        name: "Les soirées de St Marc",
        type: "Site vitrine",
        link: "https://lessoireesdesaintmarc.fr/",
        description: "Association loi 1901 organisatrice d'un festival en région Aixoise.",
        mission: "Intégration et développement HTML, CSS et Vanilla JS from scratch."
    },
    {
        name: "Kering Foundation",
        type: "Site vitrine",
        link: "https://www.keringfoundation.org/en/",
        description: "Fondation en vue de soutenir les femmes touchées par la violence.",
        mission: "Intégration et développement HTML, CSS et Vanilla JS from scratch."
    },
]
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

function HomePage() {
    return (
        <Layout title={"Intégrateur et Développeur Front-End"}>
                <Container component={"header"} style={{marginTop: 64}}>
                    <Typography variant={"h1"}>Kewin Marchand</Typography>
                    <Typography variant={"h2"}>Intégrateur et Développeur Front-End</Typography>
                    <Typography variant={"h3"}>En charge du développement et de l&apos;intégration des projets web au sein de Purjus Communication, agence de communication globale.</Typography>
                    <Typography variant={"h4"}>Vauvenargues, Provence-Alpes-Côte d’Azur, France</Typography>
                </Container>
                {/*Compétences*/}
                <Container component={"section"} style={{marginTop: 64}}>
                    <header style={{marginBottom: 40}}>
                        <Typography variant={"h1"}>Compétences</Typography>
                    </header>
                    <List>
                        {SKILLS.map((skill, i) => (
                            <ListItem key={i}>
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
                {/*Réalisations*/}
                <Container component={"section"} style={{marginTop: 64}}>
                    <header style={{marginBottom: 40}}>
                        <Typography variant={"h1"}>Réalisations</Typography>
                    </header>
                    <Grid container spacing={3}>
                        {WORKS.map((work, i) => (
                            <Grid item key={i} md={6}>
                                <Card style={{display: "flex", flexDirection: "column", height: "100%"}}>
                                    <CardHeader
                                        title={`${work.name}${work.owner ? ", " + work.owner : ""}`}
                                        subheader={work.type}
                                    />
                                    <CardContent style={{flexGrow: 1}}>
                                        <Typography>{work.description}</Typography>
                                        <Typography>{work.mission}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            href={work.link}
                                            title={`Voir le site ${work.name}`}
                                            target={"_blank"}
                                            rel={"noreferrer noopener"}
                                        >
                                            Voir le site
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
                {/*Parcours*/}
                <Container component={"section"} style={{marginTop: 64}}>
                    <header style={{marginBottom: 40}}>
                        <Typography variant={"h1"}>Parcours</Typography>
                    </header>
                    <List>
                        {BACKGROUNDS.map((background, i) => (
                            <Fragment key={i}>
                                <ListSubheader disableSticky>{background.categorie} :</ListSubheader>
                                {background.content.map((content, i) => (
                                    <ListItem key={i}>
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
                {/*Formation*/}
                <Container component={"section"} style={{marginTop: 64}}>
                    <header style={{marginBottom: 40}}>
                        <Typography variant={"h1"}>Formation</Typography>
                    </header>
                    <List>
                        {TRAININGS.map((training, i) => (
                            <ListItem key={i}>
                                <ListItemText
                                    primary={training.date}
                                    secondary={training.course}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Layout>
    )
}

export default HomePage