import React, {useContext} from "react";
import {
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@material-ui/core";
import {CheckBoxRounded} from '@material-ui/icons';
import {DeveloperContext} from "../../context/DeveloperContext";

export function Skills(): React.ReactElement {
    const {skills} = useContext(DeveloperContext);

    return (
        <Container component={"section"}>
            <header>
                <Typography variant={"h1"}>
                    Compétences
                </Typography>
            </header>
            <List disablePadding>
                {skills.map((skill, i) => (
                    <ListItem disableGutters key={i}>
                        <ListItemIcon>
                            <CheckBoxRounded color={"primary"}/>
                        </ListItemIcon>
                        <ListItemText>
                            {skill}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}