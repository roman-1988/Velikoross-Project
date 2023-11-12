import { Box, Drawer, IconButton } from "@mui/material"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

const Menu = (props) => {

    const {
        menuOpen,
        menuClose = Function.prototype,
    } = props

    return (
        <Drawer
            // variant="persistent"
            anchor="left"
            open={menuOpen}
            onClose={menuClose}
        >
            <Box width="250px">
                <IconButton size="small" onClick={menuClose}>
                    <ChevronLeftIcon />
                    Назад
                </IconButton>
            </Box>
        </Drawer>
    )
}

export { Menu }

