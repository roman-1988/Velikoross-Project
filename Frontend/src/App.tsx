import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
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
      </ThemeProvider>
    </>
  )
}

export { App }

