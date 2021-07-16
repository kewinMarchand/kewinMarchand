import React, {forwardRef, useImperativeHandle, useState} from "react";
import {Dialog} from "@material-ui/core";

// eslint-disable-next-line react/display-name
export const Popup = forwardRef(({ children, title, ref }: {children: React.ReactElement | React.ReactElement[], title: string, ref: any}) => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    const handlePopup = () => {
        setDialogIsOpen(dialogIsOpen => !dialogIsOpen);
    };

    useImperativeHandle(ref, () => ({ handlePopup, dialogIsOpen }));

    return (
        <>
            <Dialog open={dialogIsOpen}>
                {children}
            </Dialog>
        </>
    )
})
