import React from "react";
import {
    Container,
    Divider,
    Grid,
    Typography
} from "@material-ui/core";

function Header() {
    return (
        <Container component={"header"}>
            <Grid container justify={"space-between"} alignItems={"center"}>
                <Grid item>
                    <Typography variant={"h1"} gutterBottom>
                        Kewin Marchand
                    </Typography>
                    <Typography variant={"h2"} gutterBottom>
                        Intégrateur et Développeur Front-End
                    </Typography>
                    <Typography variant={"body2"}>
                        Vauvenargues, Provence-Alpes-Côte d’Azur, France
                    </Typography>
                </Grid>
                <Grid item>
                    <picture>
                        <img src="https://media-exp3.licdn.com/dms/image/C5603AQFr97lJgPe0Lg/profile-displayphoto-shrink_200_200/0/1517076606115?e=1631750400&v=beta&t=72LaUYELc3mcM02frlhXZTHWuZ4uDl1PMsMTYLU3PKs" alt="Kewin Marchand" height={200} width={200}/>
                    </picture>
                </Grid>
            </Grid>
            <Divider/>
            <Typography>
                En charge du développement et de l&apos;intégration des projets web au sein de Purjus Communication, agence de communication globale.
            </Typography>
        </Container>
    )
}

export {Header}