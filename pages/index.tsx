import React, { useContext } from "react";
import { Layout } from "../ui/components/Layout";
import { Header } from "../ui/partials/homepage/Header";
import { Skills } from "../ui/partials/homepage/Skills";
import { Works } from "../ui/partials/homepage/Works";
import { Background } from "../ui/partials/homepage/Background";
import { Training } from "../ui/partials/homepage/Training";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Image from "next/image";
import { DeveloperContext } from "../ui/contexts/DeveloperContext";

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.background.paper
  },
  aside: {
    backgroundColor: theme.palette.background.default
  },
  profilPicture: {
    margin: "auto"
  }
}));
function HomePage (): React.ReactElement {
  const classes = useStyles();
  const { developer } = useContext(DeveloperContext);

  return (
        <Layout title={"Intégrateur et Développeur Front-End"}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={8} className={classes.content}>
                        {/* Entête */}
                        <Header/>
                        {/* Compétences */}
                        <Skills/>
                        {/* Réalisations */}
                        <Works/>
                        {/* Parcours */}
                        <Background/>
                        {/* Formation */}
                        <Training/>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.aside}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <Image
                                src={developer.profilPicture}
                                alt={developer.name}
                                height={200}
                                width={200}
                                className={classes.profilPicture}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
  );
}

export default HomePage;
