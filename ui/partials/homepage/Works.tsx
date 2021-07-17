import React, {useContext, useRef, useState} from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Grid,
    Typography
} from "@material-ui/core";
import {Popup, PopupRef} from "../../components/Popup";
import {DeveloperContext, work} from "../../context/DeveloperContext";

export function Works(): React.ReactElement {
    const {works} = useContext(DeveloperContext);
    const [iframeSrc, setIframeSrc] = useState("")
    const popup = useRef<PopupRef>(null);

    const handleIframe = (work: work) => {
        popup.current?.handlePopup();
        setIframeSrc(work.link);
    }

    return (
        <Container component={"section"} style={{background: "white"}}>
            <header>
                <Typography variant={"h1"}>
                    Réalisations
                </Typography>
            </header>
            <Grid container spacing={3}>
                {works.map((work, i) => (
                    <Grid item key={i} xs={12} md={6}>
                        <Card style={{display: "flex", flexDirection: "column", height: "100%"}}>
                            <CardHeader
                                title={`${work.name}${work.owner ? ", " + work.owner : ""}`}
                                subheader={work.type}
                            />
                            <CardContent style={{flexGrow: 1}}>
                                <Typography>
                                    {work.description}
                                </Typography>
                                <Typography>
                                    {work.mission}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    title={`Voir le site ${work.name}`}
                                    onClick={() => handleIframe(work)}
                                >
                                    Voir le site
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Popup ref={popup}>
                <div style={{minWidth: "80vw"}}>
                    {"" !== iframeSrc &&
                        <iframe src={iframeSrc} height={1200} width={1600}/>
                    }
                </div>
            </Popup>
        </Container>
    )
}