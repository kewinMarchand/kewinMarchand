import React, {Fragment, useContext} from "react";
import {
    Container,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    Typography
} from "@material-ui/core";
import {DeveloperContext} from "../../context/DeveloperContext";

export function Background(): React.ReactElement {
    const {backgrounds} = useContext(DeveloperContext);

    return (
        <Container component={"section"}>
            <header>
                <Typography variant={"h1"}>
                    Parcours
                </Typography>
            </header>
            <List disablePadding>
                {backgrounds.map((background, i) => (
                    <Fragment key={i}>
                        <ListSubheader disableGutters disableSticky>{background.categorie} :</ListSubheader>
                        {background.content.map((content, i) => (
                            <ListItem disableGutters key={i}>
                                <ListItemText
                                    primary={content.date}
                                    secondary={content.job}
                                />
                            </ListItem>
                        ))}
                        {0 === i && <Divider/>}
                    </Fragment>
                ))}
            </List>
        </Container>
    )
}
