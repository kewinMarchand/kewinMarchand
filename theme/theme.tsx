import {createTheme, responsiveFontSizes} from "@material-ui/core";

let theme = createTheme({
    typography: {
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
    },
    overrides: {
        MuiContainer: {
          root: {
              marginTop: 128
          }
        },
        MuiDivider: {
            root: {
                margin: "16px 0"
            }
        }
    }
});

theme = responsiveFontSizes(theme);

export {theme}