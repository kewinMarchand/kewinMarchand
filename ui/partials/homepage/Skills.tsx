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
import {UiContext} from "../../context/UiContext";

export function Skills(): React.ReactElement {
    const {skills} = useContext(DeveloperContext);
    const {isAboveTablet} = useContext(UiContext);

    return (
        <Section title={"Compétences"} background={"white"}>
            <List dense disablePadding>
                {skills.map((skill, i) => (
                    <ListItem
                        dense
                        disableGutters
                        key={i}
                        alignItems={isAboveTablet ? "center": "flex-start"}
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