import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

enum themePalette {
    BG = "#F5F5F5",
    MAROON = "#621518",
    FONT_GLOBAL = "'JetBrains mono', monospace"
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
        }
    }
})

export const ThemeConfig: React.FC<ThemeProp>  = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}