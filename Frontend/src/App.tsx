<<<<<<< HEAD
import { AppBar, Container, Toolbar, IconButton, Typography, Box, Button } from "@mui/material"
=======
import { AppBar, Container, Toolbar, IconButton, Typography } from "@mui/material"
>>>>>>> 9e8deaea4e268f32705eeedb4384fcf775bfc013
import MenuIcon from "@mui/icons-material/Menu"
import "./App.css"

const App = () => {

  return (
    <>
<<<<<<< HEAD
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Великая Россия
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">Логин</Button>
            </Box>
            <Button color="secondary" variant="contained">Регистрация</Button>
          </Toolbar>
        </AppBar>
      </Box>
=======
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
>>>>>>> 9e8deaea4e268f32705eeedb4384fcf775bfc013
    </>
  )
}

export { App }

<<<<<<< HEAD
=======


>>>>>>> 9e8deaea4e268f32705eeedb4384fcf775bfc013
