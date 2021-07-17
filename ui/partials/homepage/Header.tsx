import React, {useContext} from "react";
import Image from "next/image";
import {
    Container,
    Divider,
    Grid,
    Typography
} from "@material-ui/core";
import {DeveloperContext} from "../../context/DeveloperContext";
import {UiContext} from "../../context/UiContext";

export function Header(): React.ReactElement {
    const {developer} = useContext(DeveloperContext);
    const {isAboveTablet} = useContext(UiContext);

    return (
        <Container component={"header"} style={{paddingBottom: 96}}>
            <Typography
                variant={"h1"}
                gutterBottom
            >
                {developer.name}
            </Typography>
            <Grid
                container
                justifyContent={"space-between"}
                alignItems={isAboveTablet ? "center" : "flex-start"}
                direction={isAboveTablet ? "row" : "column-reverse"}
            >
                <Grid item>
                    <Typography
                        variant={"h2"}
                        gutterBottom
                    >
                        {developer.job}
                    </Typography>
                    <Typography gutterBottom>
                        {developer.getAge(developer.birthdate)}
                    </Typography>
                    <Typography gutterBottom>
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
