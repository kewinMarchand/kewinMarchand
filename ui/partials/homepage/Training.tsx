import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { DeveloperContext } from "../../contexts/DeveloperContext";
import { Section } from "../../components/Section";

export function Training (): React.ReactElement {
  const { trainings } = useContext(DeveloperContext);

  return (
        <Section title={"Formation"}>
            <List dense disablePadding>
                {trainings.map((training, i) => (
                    <ListItem dense disableGutters key={i}>
                        <ListItemText
                            primary={training.date}
                            secondary={training.course}
                        />
                    </ListItem>
                ))}
            </List>
        </Section>
  );
}
