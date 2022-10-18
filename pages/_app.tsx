import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";
import Head from "../components/head";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#3c6e71",
    },
    error: {
      main: "#ee6c4d",
    },
    warning: {
      main: "#faa307",
    },
    info: {
      main: "#98c1d9",
    },
    success: {
      main: "#80ed99",
    },
    background: { default: "#ced4da" },
    divider: "#ced4da",
    common: {
      black: "#343a40",
      white: "#ffffff",
    },
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
});
// primary?: PaletteColorOptions;
//   secondary?: PaletteColorOptions;
//   error?: PaletteColorOptions;
//   warning?: PaletteColorOptions;
//   info?: PaletteColorOptions;
//   success?: PaletteColorOptions;
//   mode?: PaletteMode;
//   tonalOffset?: PaletteTonalOffset;
//   contrastThreshold?: number;
//   common?: Partial<CommonColors>;
//   grey?: ColorPartial;
//   text?: Partial<TypeText>;
//   divider?: string;
//   action?: Partial<TypeAction>;
//   background?: Partial<TypeBackground>;
//   getContrastText?: (background: string) => string;
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head />
      <CssBaseline />
      <Layout>
        <Grid container justifyContent="center">
          <Grid item lg={6} md={8} xs={12}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </Layout>
    </ThemeProvider>
  );
}
export default MyApp;
