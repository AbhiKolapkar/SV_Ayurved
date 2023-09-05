import { createTheme } from "@mui/material/styles";

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1100,
    xl: 1300,
    xxl: 1536,
  },
};

export let theme = createTheme();

theme = createTheme({
  breakpoints,

  palette: {
    default: {
      main: "#FFFFFF",
      primary: "#0F424D",
      contrastText: "#FFFFFF",
    },
    primary: {
      main: "#0F424D",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#869633",
      light: "#ACBD33",
      dark: "#60682A",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#0F424D",
      tertiary: "#869633",
      quaternary: "#60682A",
      quinary: "#ACBD33",
    },
    alert: {
      main: "#a8771a",
    },
  },

  typography: {
    fontFamily: ["var(--poppins)", "var(--playfair)"].join(","),
    fontSize: 16,
    h1: {
      fontFamily: "var(--playfair)",
      fontSize: "2.625rem", // 42px
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "normal",
      [theme.breakpoints.down("lg")]: {
        fontSize: "2rem", // 32px
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.75rem", // 28px
      },
    },
    h2: {
      fontFamily: "var(--playfair)",
      fontSize: "2.1875rem", // 35px
      fontWeight: 700,
      fontStyle: "normal",
      lineHeight: "normal",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem", // 24px
      },
    },
    h3: {
      fontFamily: "var(--poppins)",
      fontSize: "1.875rem", // 30px
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "normal",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1.5625rem", // 25px
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.25rem", // 20px
      },
    },
    h4: {
      fontFamily: "var(--poppins)",
      fontSize: "1.5625rem", // 25px
      fontWeight: 600,
      fontStyle: "italic",
      lineHeight: "164%",
      [theme.breakpoints.down("lg")]: {
        fontSize: "1.125rem", // 20px
      },
    },
    h5: {
      fontFamily: "var(--poppins)",
      fontSize: "1.25rem", // 20px
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "normal",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.125rem", // 18px
      },
    },
    h6: {
      fontFamily: "var(--poppins)",
      fontSize: "1.125rem", // 18px
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "normal",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem", // 16px
      },
    },
    subtitle1: {
      fontFamily: "var(--poppins)",
      fontSize: "1rem", // 16px
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "normal",
    },
    subtitle2: {
      fontFamily: "var(--poppins)",
      fontSize: "1rem", // 16px
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "normal",
    },
    body1: {
      fontFamily: "var(--poppins)",
      fontSize: "1rem", // 16px
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "158%",
    },
    body2: {
      fontFamily: "var(--poppins)",
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "174%",
    },
    button: {
      fontFamily: "var(--poppins)",
      fontSize: "1rem", // 16px
      fontWeight: 400,
      fontStyle: "normal",
      lineHeight: "185%",
      textTransform: "unset",
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "100%",
        },
      },
    },

    MuiMenu: {
      styleOverrides: {
        paper: {
          minWidth: 180,
          minHeight: 10,
          padding: "0 0.5rem",
          boxShadow: '1px 4px 10px 0 rgba(0, 0, 0, 0.3)',
          marginTop: 15,
          [theme.breakpoints.down("sm")]: {
            width: "90%",
            height: '100%',
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          height: '48px'
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '1.875rem',
          color: '#0f424d',
          padding: 0,
          height: '100%',
          "& .MuiOutlinedInput-notchedOutline": {
            border: 'none',
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: 'none',
            },
          }
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ACBD33',
          top: '-5px',
          backgroundColor: 'transparent',
          "&.Mui-focused": {
            color: '#ACBD33',
            fontSize: '1rem',
          }
        },
        shrink: {
          left: '-1.5rem',
          top: '-0.9rem',
          fontSize: '1rem',
        }
      }
    },

    MuiAutocomplete: {
      styleOverrides: {
        root: {
          padding: 0,
          height: '100%',
        },
        inputRoot: {
          padding: 0,
          paddingLeft: '5px',
        },
        option: {
          color: '#ACBD33',
          borderBottom: '1px solid #dfdfdf',
        },
        endAdornment: {
          top: 0,
          transform: 'translate(0, 28%)'
        }
      }
    }
  },
});
