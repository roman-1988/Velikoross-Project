import { Box, Drawer, Divider, IconButton } from "@mui/material"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

const Menu = (props) => {

    // const drawerWidth = 240

    const {
        menuOpen,
        menuClose = Function.prototype,
    } = props

    return (
        <Drawer
            // sx={{
            //     width: drawerWidth,
            //     flexShrink: 0,
            //     "& .MuiDrawer-paper": {
            //         width: drawerWidth,
            //         boxSizing: "border-box"
            //     },
            // }}
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

// const DrawerHeader = styled("div")(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//     justifyContent: "flex-start",
// }))


{/* <List>
<ListItem onClick={handleDrawerClose}>
    <ListItemIcon>
        <ChevronLeftIcon />
    </ListItemIcon>
    <ListItemText primary="Назад" />
</ListItem>
</List> */}