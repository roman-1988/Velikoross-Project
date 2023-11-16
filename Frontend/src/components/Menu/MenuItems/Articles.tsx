import { useState } from "react"
import { List, ListItemText, ListItemButton, ListItemIcon, Collapse } from "@mui/material"
import FeedIcon from "@mui/icons-material/Feed"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"
import CreateIcon from "@mui/icons-material/Create"

const Articles = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <FeedIcon />
                </ListItemIcon>
                <ListItemText primary="Статьи" />
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
                </List>
            </Collapse>
        </>
    )
}

export { Articles }