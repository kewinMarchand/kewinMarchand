import React, {useContext} from "react";
import Image from "next/image";
import {
    Container,
    Divider,
    Grid,
    Typography
} from "@material-ui/core";
import {DeveloperContext} from "../../context/DeveloperContext";

export function Header(): React.ReactElement {
    const {developer} = useContext(DeveloperContext);

    return (
        <Container component={"header"}>
            <Typography variant={"h1"}>
                {developer.name}
            </Typography>
            <Grid container justifyContent={"space-between"} alignItems={"center"}>
                <Grid item>
                    <Typography variant={"h2"} gutterBottom>
                        {developer.job}
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
        </Container>
    )
}
