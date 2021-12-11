import { useThemeContext } from '../context/themeContext'
import {
  Button,
  Main
} from '../styles/home'

export default function Home() {
  const { theme, setTheme} = useThemeContext()
  return (
    <Main>
      <h1>Hello world</h1>
      <Button onClick={()=> setTheme(!theme)}>Valor</Button>
    </Main>
  )
}
