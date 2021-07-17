import {createTheme, responsiveFontSizes} from "@material-ui/core";

let theme = createTheme({});

const palette = {...theme.palette};
const typography = {
    ...theme.typography,
    fontFamily: ['Roboto',].join(','),
    h1: {
        fontSize: 32,
    },
    h2: {
        fontSize: 30,
    },
    h3: {
        fontSize: 28,
    },
    h4: {
        fontSize: 24,
    },
    h5: {
        fontSize: 20,
    },
    h6: {
        fontSize: 18,
    },
};
const overrides = {
    MuiContainer: {
        root: {
            backgroundColor: "inherit",
        }
    },
    MuiDivider: {
        root: {
            margin: "16px 0"
        }
    },
    MuiListItem: {
        root: {
            alignItems: "flex-start"
        }
    },
    MuiListItemIcon: {
        root: {
            lineHeight: "30px",
        }
    },
    MuiListItemText: {
        root: {
            marginBottom: 0,
            marginTop: 0,
        }
    }
}
theme.palette = palette;
theme.typography = typography;
theme.overrides = overrides;

/*
theme = responsiveFontSizes(theme);
*/

export {theme}