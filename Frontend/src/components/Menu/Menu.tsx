import { MainThemes } from "./MenuItems/MainThemes"
import { Articles } from "./MenuItems/Articles"
import { Documents } from "./MenuItems/Documents"
import { Books } from "./MenuItems/Books"
import { Forum } from "./MenuItems/Forum"
import { Contacts } from "./MenuItems/Contacts"
import { Box, Drawer, IconButton, List, Divider } from "@mui/material"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

const Menu = (props) => {
    const {
        menuOpen,
        menuClose = Function.prototype,
    } = props

    return (
        <Drawer
            anchor="left"
            open={menuOpen}
            onClose={menuClose}
        >
            <Box width="250px">
                <IconButton size="small" onClick={menuClose}>
                    <ChevronLeftIcon />
                </IconButton>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <MainThemes />
                    <Divider variant="inset" component="li" />
                    <Articles />
                    <Divider variant="inset" component="li" />
                    <Documents />
                    <Divider variant="inset" component="li" />
                    <Books />
                    <Divider variant="inset" component="li" />
                    <Forum />
                    <Divider variant="inset" component="li" />
                    <Contacts />
                </List>
            </Box>
        </Drawer>
    )
}

export { Menu }

