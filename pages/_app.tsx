import { ContextProvider } from "../context/themeContext"
import GlobalReset from '../styles/GlobalReset'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <ContextProvider>
        <GlobalReset />
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default MyApp
