import React, {useContext} from "react";
import {
    Container,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@material-ui/core";
import {DeveloperContext} from "../../context/DeveloperContext";

export function Training(): React.ReactElement {
    const {trainings} = useContext(DeveloperContext);

    return (
        <Container component={"section"}>
            <header>
                <Typography variant={"h1"}>
                    Formation
                </Typography>
            </header>
            <List disablePadding>
                {trainings.map((training, i) => (
                    <ListItem disableGutters key={i}>
                        <ListItemText
                            primary={training.date}
                            secondary={training.course}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}