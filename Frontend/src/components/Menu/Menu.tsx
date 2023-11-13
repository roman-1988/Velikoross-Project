import { Box, Drawer, IconButton, List, ListItem, ListItemText, ListItemButton, ListItemIcon, ListItemAvatar, Avatar, Divider } from "@mui/material"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import PublicIcon from "@mui/icons-material/Public"
import FeedIcon from "@mui/icons-material/Feed"
import HistoryEduIcon from "@mui/icons-material/HistoryEdu"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"
import ForumIcon from "@mui/icons-material/Forum"
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread"

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
                </IconButton>
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <PublicIcon />
                        </ListItemIcon>
                        <ListItemText primary="Главные темы" />
                    </ListItemButton>
                    <Divider variant="inset" component="li" />
                    <ListItemButton>
                        <ListItemIcon>
                            <FeedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Статьи" />
                    </ListItemButton>
                    <Divider variant="inset" component="li" />
                    <ListItemButton>
                        <ListItemIcon>
                            <HistoryEduIcon />
                        </ListItemIcon>
                        <ListItemText primary="Документы" />
                    </ListItemButton>
                    <Divider variant="inset" component="li" />
                    <ListItemButton>
                        <ListItemIcon>
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Книги" />
                    </ListItemButton>
                    <Divider variant="inset" component="li" />
                    <ListItemButton>
                        <ListItemIcon>
                            <ForumIcon />
                        </ListItemIcon>
                        <ListItemText primary="Форум" />
                    </ListItemButton>
                    <Divider variant="inset" component="li" />
                    <ListItemButton>
                        <ListItemIcon>
                            <MarkAsUnreadIcon />
                        </ListItemIcon>
                        <ListItemText primary="Контакты" />
                    </ListItemButton>
                </List>
            </Box>
        </Drawer>
    )
}

export { Menu }

