import React, {forwardRef, useImperativeHandle, useState} from "react";
import {Dialog} from "@material-ui/core";

export interface PopupRef {
    handlePopup(): void;
    dialogIsOpen: boolean;
}

type Popup = {children: React.ReactElement | React.ReactElement[]}

export const Popup = forwardRef((props: Popup, ref): React.ReactElement => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    const handlePopup = () => {
        setDialogIsOpen(dialogIsOpen => !dialogIsOpen);
    };

    useImperativeHandle(ref, () => ({ handlePopup, dialogIsOpen }));

    return (
        <>
            <Dialog open={dialogIsOpen} onClose={handlePopup} maxWidth={'lg'}>
                {props.children}
            </Dialog>
        </>
    )
})

Popup.displayName = "Popup";
