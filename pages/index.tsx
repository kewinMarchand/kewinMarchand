import React from "react";
import {Layout} from "../components/Layout";
import {Header} from "../partials/homepage/Header";
import {Skills} from "../partials/homepage/Skills";
import {Works} from "../partials/homepage/Works";
import {Background} from "../partials/homepage/Background";
import {Training} from "../partials/homepage/Training";

function HomePage() {
    return (
        <Layout title={"Intégrateur et Développeur Front-End"}>
            {/*Entête*/}
            <Header/>
            {/*Compétences*/}
            <Skills/>
            {/*Réalisations*/}
            <Works/>
            {/*Parcours*/}
            <Background/>
            {/*Formation*/}
            <Training/>
        </Layout>
    )
}

export default HomePage