import React from "react";
import {Layout} from "../ui/components/Layout";
import {Header} from "../ui/partials/homepage/Header";
import {Skills} from "../ui/partials/homepage/Skills";
import {Works} from "../ui/partials/homepage/Works";
import {Background} from "../ui/partials/homepage/Background";
import {Training} from "../ui/partials/homepage/Training";

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