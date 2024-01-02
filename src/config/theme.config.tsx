import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

enum themePalette {
    BG = "#050C16",
    DBLUE = "#3498DB",
    FONT_GLOBAL = "'JetBrains mono', monospace"
}

type ThemeProp = {
    children: JSX.Element
}

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: themePalette.BG
        },
        primary: {
            main: themePalette.DBLUE
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