import React, { Fragment, useContext } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader
} from "@material-ui/core";
import { DeveloperContext } from "../../contexts/DeveloperContext";
import { Section } from "../../components/Section";

export function Background (): React.ReactElement {
  const { backgrounds } = useContext(DeveloperContext);

  return (
        <Section title={"Parcours"}>
            <List dense disablePadding>
                {backgrounds.map((background, i) => (
                    <Fragment key={i}>
                        <ListSubheader
                            disableGutters
                            disableSticky
                        >
                            {background.categorie} :
                        </ListSubheader>
                        {background.content.map((content, i) => (
                            <ListItem disableGutters key={i}>
                                <ListItemText
                                    primary={content.date}
                                    secondary={content.job}
                                />
                            </ListItem>
                        ))}
                        {i === 0 && <Divider/>}
                    </Fragment>
                ))}
            </List>
        </Section>
  );
}
