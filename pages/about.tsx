import React from "react";
import {Layout} from "../components/Layout";
import {Container} from "@material-ui/core";

function About() {
    return (
        <>
            <Layout title={"À propos"}>
                <Container>
                    <h1>À propos</h1>
                </Container>
            </Layout>
        </>
    )
}

export default About