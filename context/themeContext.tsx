import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { themeDark, themeLight} from '../styles/theme'

interface IThemeContext {
  theme: boolean;
  setTheme: Dispatch<SetStateAction<boolean>>
}

interface IThemeProvider {
  children: ReactNode;
}

const MyContext = createContext({} as IThemeContext)

export function ContextProvider({children}: IThemeProvider){
  const [theme, setTheme] = useState(true)
  return(
    <MyContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={theme ? themeDark : themeLight}>        
        {children}
      </ThemeProvider>
    </MyContext.Provider>
  )
}

export const useThemeContext = () => useContext(MyContext)