import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { MainArticle } from "./components/MainArticle/MainArticle"
import { Footer } from "./components/Footer/Footer"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import "./App.css"

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc107"
    },
    secondary: {
      main: "#d50000"
    }
  }
})

const App = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Main />
        <MainArticle />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export { App }

