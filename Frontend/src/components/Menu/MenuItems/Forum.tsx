import { ListItemText, ListItemButton, ListItemIcon } from "@mui/material"
import ForumIcon from "@mui/icons-material/Forum"

const Forum = () => {
    return (
        <>
            <ListItemButton>
                <ListItemIcon>
                    <ForumIcon />
                </ListItemIcon>
                <ListItemText primary="Форум" />
            </ListItemButton>
        </>
    )
}

export { Forum }