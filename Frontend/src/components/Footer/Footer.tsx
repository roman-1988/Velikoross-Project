import { Box, AppBar, Typography, IconButton, Stack } from "@mui/material"
import FacebookIcon from "@mui/icons-material/Facebook"
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <Box sx={{
                flexGrow: 1
            }}>
                <AppBar sx={{ height: "65.875px" }} position="static">
                    <Typography component="div" sx={{ flexGrow: 1 }}
                        ml={1} mt={1}>
                        Copyright © 2023 Великая Россия
                    </Typography>
                    <Typography component="div" sx={{ flexGrow: 1 }}
                        ml={1} mb={1}>
                        Карта сайта
                    </Typography>
                    <Stack direction="row" spacing={1}>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    </Stack>
                </AppBar>
            </Box>
        </>
    )
}

export { Footer }



