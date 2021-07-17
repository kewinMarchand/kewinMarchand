import React, {useContext} from "react";
import {
    Container,
    Divider,
    Grid,
    Typography
} from "@material-ui/core";
import {DataContext} from "../../context/DataContext";

function Header() {
    const data = useContext(DataContext);

    return (
        <Container component={"header"}>
            <Typography variant={"h1"}>
                {data.kewinMarchand.name}
            </Typography>
            <Grid container justifyContent={"space-between"} alignItems={"center"}>
                <Grid item>
                    <Typography variant={"h2"} gutterBottom>
                        {data.kewinMarchand.job}
                    </Typography>
                    <Typography variant={"body2"}>
                        {data.kewinMarchand.city}
                    </Typography>
                </Grid>
                <Grid item component={"picture"}>
                    <img
                        src={data.kewinMarchand.profilPicture}
                        alt={data.kewinMarchand.name}
                        height={200}
                        width={200}
                    />
                </Grid>
            </Grid>
            <Divider/>
            <Typography>
                {data.kewinMarchand.mission}
            </Typography>
        </Container>
    )
}

export {Header}