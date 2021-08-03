import { createTheme } from "@material-ui/core";
import { deepOrange, grey, teal } from "@material-ui/core/colors";

const theme = createTheme({});

const palette = {
  ...theme.palette,
  primary: {
    main: teal[500],
    light: teal[300],
    dark: teal[700],
    contrastText: grey[100]
  },
  secondary: {
    main: deepOrange[400],
    light: deepOrange[300],
    dark: deepOrange[700],
    contrastText: grey[100]
  }
};

const typography = {
  ...theme.typography,
  fontFamily: ["Roboto"].join(","),
  h1: {
    fontSize: 32
  },
  h2: {
    fontSize: 30
  },
  h3: {
    fontSize: 28
  },
  h4: {
    fontSize: 24
  },
  h5: {
    fontSize: 20
  },
  h6: {
    fontSize: 18
  }
};
const overrides = {
  MuiContainer: {
    root: {
      backgroundColor: "inherit"
    }
  },
  MuiDivider: {
    root: {
      margin: "16px 0"
    }
  },
  MuiListItem: {
    root: {

    }
  },
  MuiListItemIcon: {
    root: {

    }
  },
  MuiListItemText: {
    root: {
      marginBottom: 0,
      marginTop: 0
    }
  }
};
theme.palette = palette;
theme.typography = typography;
theme.overrides = overrides;

/*
theme = responsiveFontSizes(theme);
*/

export { theme };
