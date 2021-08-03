import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { DeveloperContext } from "../../contexts/DeveloperContext";

type siteInfos = {
    title: string,
    name: string,
    description: string,
    locale: string,
    image: string,
    url: string,
    color: string,
}

export function AppHead ({ title }: {title: string}): React.ReactElement {
  const { developer } = useContext(DeveloperContext);
  const [site, setSite] = useState<siteInfos>();

  useEffect(() => {
    const siteInfos: siteInfos = {
      title: `${developer.name} - ${title}`,
      name: `Portfolio de ${developer.name}`,
      description: `${developer.name} ${developer.job} ${developer.mission}`,
      locale: "fr",
      image: developer.profilPicture as unknown as string,
      url: "https://kewin-marchand.netlify.app/",
      color: "#ffffff"
    };
    setSite(siteInfos);
  }, [developer, title]);

  return (
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=0, maximum-scale=5"/>
            <meta content="true" name="HandheldFriendly"/>

            <meta name="publisher" content={developer.name}/>
            <meta name="Author" content={developer.name}/>
            <meta name="Reply-To" content={developer.email}/>

            <meta name="description" content={site?.description}/>

            <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content={site?.name}/>
            <meta prefix="og: http://ogp.me/ns#" property="og:url" content={site?.url}/>
            <meta prefix="og: http://ogp.me/ns#" property="og:title" content={site?.title}/>
            <meta prefix="og: http://ogp.me/ns#" property="og:description" content={site?.description}/>
            <meta prefix="og: http://ogp.me/ns#" property="og:locale" content={site?.locale}/>
            <meta prefix="og: http://ogp.me/ns#" property="og:image" content={site?.image}/>
            <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website"/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={site?.url}/>
            <meta property="twitter:title" content={site?.title}/>
            <meta property="twitter:description" content={site?.description}/>
            <meta property="twitter:image" content={site?.image}/>

            <meta name="msapplication-TileColor" content={site?.color}/>
            <meta name="theme-color" content={site?.color}/>

            <title>{site?.title}</title>

            <link rel="image_src" href={site?.image}/>
        </Head>
  );
}
