import React from "react";
import {Layout} from "../components/Layout";
import {Container} from "@material-ui/core";
import Head from "next/head";

function About() {
    return (
        <>
            <Head>
                <title>Kewin Marchand - À propos</title>
            </Head>
            <Layout>
                <Container>
                    <h1>À propos</h1>
                </Container>
            </Layout>
        </>
    )
}

export default About