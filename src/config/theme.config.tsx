import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

enum themePalette {
    BG = "#F5F5F5",
    MAROON = "#621518",
    FONT_GLOBAL = "'JetBrains mono', monospace",
    // alert styles
    ERROR_MAIN = "#F44336",
    BG_ERROR_MAIN = "rgba(244, 67, 54, 0.1)",
    SUCCESS_MAIN = "#66BB6A",
    BG_SUCCESS_MAIN = "rgba(102, 187, 106, 0.1)"
}

type ThemeProp = {
    children: JSX.Element
}

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: themePalette.BG
        },
        primary: {
            main: themePalette.MAROON
        }
    },
    typography: {
        fontFamily: themePalette.FONT_GLOBAL
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                }
            }
        },
        MuiAlert: {
            styleOverrides: {
                standardError: {
                    border: `1px solid ${themePalette.ERROR_MAIN}`,
                    background: themePalette.BG_ERROR_MAIN
                },
                standardSuccess: {
                    border: `1px solid ${themePalette.SUCCESS_MAIN}`,
                    background: themePalette.BG_SUCCESS_MAIN
                }
            }
        }
    }
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}