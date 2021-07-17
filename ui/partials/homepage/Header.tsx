import React, {useContext} from "react";
import Image from "next/image";
import {
    Divider,
    Grid,
    Typography
} from "@material-ui/core";
import {DeveloperContext} from "../../context/DeveloperContext";
import {Section} from "../../components/Section";

export function Header(): React.ReactElement {
    const {developer} = useContext(DeveloperContext);

    return (
        <Section title={developer.name}>
            <Grid container justifyContent={"space-between"} alignItems={"center"}>
                <Grid item>
                    <Typography variant={"h2"} gutterBottom>
                        {developer.job}
                    </Typography>
                    <Typography variant={"body2"} gutterBottom>
                        {developer.getAge(developer.birthdate)}
                    </Typography>
                    <Typography variant={"body2"}>
                        {developer.city}
                    </Typography>
                </Grid>
                <Grid item component={"picture"}>
                    <Image
                        src={developer.profilPicture}
                        alt={developer.name}
                        height={200}
                        width={200}
                    />
                </Grid>
            </Grid>
            <Divider/>
            <Typography>
                {developer.mission}
            </Typography>
        </Section>
    )
}
