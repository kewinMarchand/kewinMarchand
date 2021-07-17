import React, {useRef, useState} from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import {Popup, PopupRef} from "../../components/Popup";

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
function Works() {
    const [iframeSrc, setIframeSrc] = useState("")
    const popup = useRef<PopupRef>(null);

    const handleIframe = (work: work) => {
        popup.current?.handlePopup();
        setIframeSrc(work.link);
    }

    return (
        <Container component={"section"} style={{background: "white"}}>
            <header>
                <Typography variant={"h1"}>
                    Réalisations
                </Typography>
            </header>
            <Grid container spacing={3}>
                {WORKS.map((work, i) => (
                    <Grid item key={i} xs={12} md={6}>
                        <Card style={{display: "flex", flexDirection: "column", height: "100%"}}>
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
                                    title={`Voir le site ${work.name}`}
                                    onClick={() => handleIframe(work)}
                                >
                                    Voir le site
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Popup ref={popup}>
                <div style={{minWidth: "80vw"}}>
                    {"" !== iframeSrc &&
                        <iframe src={iframeSrc} height={1200} width={1600}/>
                    }
                </div>
            </Popup>
        </Container>
    )
}

export {Works}