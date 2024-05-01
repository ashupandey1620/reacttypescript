import {createContext} from 'react'
import {theme} from './theme'

type ThemeContextproviderProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)



export const ThemeContextProvider = ({children}:ThemeContextproviderProps) => {
    return <ThemeContext.Provider value = {theme}>children</ThemeContext.Provider>
}

