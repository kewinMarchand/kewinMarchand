import {createTheme, responsiveFontSizes} from "@material-ui/core";

let theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
        ].join(','),
    },
});

theme = responsiveFontSizes(theme);

export {theme}