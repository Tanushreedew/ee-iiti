import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000249",
    },
    secondary: {
      main: "#B2103F",
    },
  },
});

theme.typography.h1 = {
    fontSize: "2rem",
  fontFamily:'Roboto Condensed,sans-serif',
  color: "#000",
  fontWeight: 700,
};
theme.typography.h3 = {
  fontSize: "1.2rem",
  color: "#000",
};
theme.typography.h4 = {
    fontSize: "1.1rem",
    color: "#000",
};
theme.typography.h5 = {
    fontSize: "1rem",
    color: "#000",
};
theme.typography.h6 = {
    fontSize: "0.9rem",
    color: "#000",
};

export default theme;