import { Box, Drawer, IconButton } from "@mui/material"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PublicIcon from '@mui/icons-material/Public';
import FeedIcon from '@mui/icons-material/Feed';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ForumIcon from '@mui/icons-material/Forum';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import Divider from '@mui/material/Divider';

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
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PublicIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Главные темы" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FeedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Статьи" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <HistoryEduIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Документы" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <AutoStoriesIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Книги" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ForumIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Форум" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <MarkAsUnreadIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Контакты" />
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}

export { Menu }

