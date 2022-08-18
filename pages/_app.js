import NavBar from "../components/layout/NavBar"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar></NavBar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
