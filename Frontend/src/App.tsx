import { AppBar, Container, Toolbar, IconButton, Typography, Box, Button } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import "./App.css"

const App = () => {

  return (
    <>
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
    </>
  )
}

export { App }



{/* <AppBar position="fixed">
<Container fixed>
  <Toolbar>
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6">Великая Россия</Typography>
    <Box mr={3}>
      <Button variant="outlined" color="inherit">Логин</Button>
    </Box>
    <Button variant="contained" color="secondary">Регистрация</Button>
  </Toolbar>
</Container>
</AppBar> */}