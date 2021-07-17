import React, {useContext} from "react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import {CheckBoxRounded} from '@material-ui/icons';
import {DeveloperContext} from "../../context/DeveloperContext";
import {Section} from "../../components/Section";

export function Skills(): React.ReactElement {
    const {skills} = useContext(DeveloperContext);

    return (
        <Section title={"Compétences"}>
            <List dense disablePadding>
                {skills.map((skill, i) => (
                    <ListItem
                        dense
                        disableGutters
                        key={i}
                    >
                        <ListItemIcon>
                            <CheckBoxRounded color={"primary"}/>
                        </ListItemIcon>
                        <ListItemText>
                            {skill}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Section>
    )
}