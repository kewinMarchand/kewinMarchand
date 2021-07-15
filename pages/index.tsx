import React from "react";
import {Layout} from "../components/Layout";
import {Container} from "@material-ui/core";
import Head from "next/head";

function HomePage() {
    return (
        <>
            <Head>
                <title>Kewin Marchand - Intégrateur et Développeur Front-End</title>
            </Head>
            <Layout>
                <Container>
                    <h1>Kewin Marchand</h1>
                </Container>
            </Layout>
        </>
    )
}

export default HomePage