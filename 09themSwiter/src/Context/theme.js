import React from 'react'
import { useContext, createContext } from 'react'

// Creating context

export const ThemeContext = createContext({
    themeMode :"light",
    darkTheme : () =>{},
    lightTheme : () =>{}
})


// Creating Context Provider

export const ThemeContextProvider = ThemeContext.Provider


// Creating custome hook to use theme context

export default function useTheme() {
    return useContext(ThemeContext)
}