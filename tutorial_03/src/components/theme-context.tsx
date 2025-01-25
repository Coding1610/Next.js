"use client"
import { createContext, useContext } from "react"

type Theme = {
    colors:{
        primary:string,
        secondary:string,
    },
}

type Props = {
    children:React.ReactNode,
}

const defaultTheme:Theme = {
    colors:{
        primary:"#007bff",
        secondary:"#6c757d",
    },
}

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = (props:Props) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);