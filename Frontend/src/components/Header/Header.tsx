import { AppBar, Toolbar, IconButton, Typography, Box, Button } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import image from "../../assets/logo.svg"
import "./Header.css"

const itemData =
{
  img: image,
  title: "logo",
  width: "50px",
}



const Header = ({ handleMenu }) => {

  return (
    <>
      <Box sx={{
        flexGrow: 1,
      }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <IconButton>
              <img src={itemData.img} alt={itemData.title} width={itemData.width} />
            </IconButton>
            <Typography variant="h6" component="div" sx={{
              flexGrow: 1,
              cursor: "default",
              fontFamily: "Merriweather",
              userSelect: "none"
            }}
              ml={1}>
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

export { Header }
