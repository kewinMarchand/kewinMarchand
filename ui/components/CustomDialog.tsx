import React, {forwardRef, useImperativeHandle, useState} from "react";
import {Dialog} from "@material-ui/core";

export interface CustomDialogRef {
    handleDialog(): void;
    dialogIsOpen: boolean;
}

type CustomDialog = {children: React.ReactElement | React.ReactElement[]}

export const CustomDialog = forwardRef((props: CustomDialog, ref): React.ReactElement => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    const handleDialog = () => {
        setDialogIsOpen(dialogIsOpen => !dialogIsOpen);
    };

    useImperativeHandle(ref, () => ({ handleDialog, dialogIsOpen }));

    return (
        <>
            <Dialog open={dialogIsOpen} onClose={handleDialog} maxWidth={'lg'}>
                {props.children}
            </Dialog>
        </>
    )
})

CustomDialog.displayName = "CustomDialog";
