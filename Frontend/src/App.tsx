import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { MainArticle } from "./components/MainArticle/MainArticle"
import { Menu } from "./components/Menu/Menu"
import { Footer } from "./components/Footer/Footer"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useState } from "react"
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
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header handleMenu={() => setMenuOpen(true)} />
        <Main />
        <MainArticle />
        <Footer />
        <Menu
          menuOpen={isMenuOpen}
          menuClose={() => setMenuOpen(false)}
        />
      </ThemeProvider>
    </>
  )
}

export { App }

