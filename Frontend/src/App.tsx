import { AppBar, Container, Toolbar, IconButton, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import "./App.css"

const App = () => {

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography>Великая Россия</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export { App }



