import { ListItemText, ListItemButton, ListItemIcon } from "@mui/material"
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread"

const Contacts = () => {
    return (
        <>
            <ListItemButton>
                <ListItemIcon>
                    <MarkAsUnreadIcon />
                </ListItemIcon>
                <ListItemText primary="Контакты" />
            </ListItemButton>
        </>
    )
}

export { Contacts }