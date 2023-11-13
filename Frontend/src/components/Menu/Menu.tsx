import { useState } from "react"
import { Box, Drawer, IconButton, List, ListItemText, ListItemButton, ListItemIcon, Collapse, Divider }
    from "@mui/material"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import PublicIcon from "@mui/icons-material/Public"
import FeedIcon from "@mui/icons-material/Feed"
import HistoryEduIcon from "@mui/icons-material/HistoryEdu"
import AutoStoriesIcon from "@mui/icons-material/AutoStories"
import ForumIcon from "@mui/icons-material/Forum"
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import CreateIcon from "@mui/icons-material/Create"

const Menu = (props) => {
    const [open, setOpen] = useState(false)

    const {
        menuOpen,
        menuClose = Function.prototype,
    } = props

    const handleClick = () => {
        setOpen(!open)
    }

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
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <AutoStoriesIcon />
                        </ListItemIcon>
                        <ListItemText primary="Книги" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <CreateIcon />
                                </ListItemIcon>
                                <ListItemText primary="Андрей Савельев" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <CreateIcon />
                                </ListItemIcon>
                                <ListItemText primary="Иван Ильин" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <CreateIcon />
                                </ListItemIcon>
                                <ListItemText primary="Константин Победоносцев" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <CreateIcon />
                                </ListItemIcon>
                                <ListItemText primary="Иван Солоневич" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <CreateIcon />
                                </ListItemIcon>
                                <ListItemText primary="Михаил Меньшиков" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <CreateIcon />
                                </ListItemIcon>
                                <ListItemText primary="Лев Тихомиров" />
                            </ListItemButton>
                        </List>
                    </Collapse>
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

