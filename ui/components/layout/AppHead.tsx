import React, {useContext} from "react";
import Head from "next/head";
import {DeveloperContext} from "../../context/DeveloperContext";

export function AppHead({ title }: {title: string}): React.ReactElement {
    const {developer} = useContext(DeveloperContext);

    return (
        <Head>
            <title>{developer.name} - {title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
}