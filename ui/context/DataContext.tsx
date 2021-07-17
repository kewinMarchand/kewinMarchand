import React from 'react';

const PROFIL_PICTURE = "https://media-exp3.licdn.com/dms/image/C5603AQFr97lJgPe0Lg/profile-displayphoto-shrink_200_200/0/1517076606115?e=1631750400&v=beta&t=72LaUYELc3mcM02frlhXZTHWuZ4uDl1PMsMTYLU3PKs";

const K_M = {
    name: "Kewin Marchand",
    job: "Intégrateur et Développeur Front-End",
    city: "Vauvenargues, Provence-Alpes-Côte d’Azur, France",
    profilPicture: PROFIL_PICTURE,
    mission: "En charge du développement et de l'intégration des projets web au sein de Purjus Communication, agence de communication globale."
}

export const DataContext = React.createContext(
    {
        kewinMarchand: K_M
    }
);

export const DataProvider = (props: {children: React.ReactElement }): React.ReactElement => {
    return (
        <DataContext.Provider
            value={{
                kewinMarchand: K_M,
            }}
        >
            {props.children}
        </DataContext.Provider>
    )
}