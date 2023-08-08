import { Box, AppBar, Typography } from "@mui/material"
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <Box sx={{
                flexGrow: 1,
            }}>
                <AppBar sx={{ height: "65.875px" }} position="static">
                    <Typography>
                        Copyright © 2023 Великая Россия
                    </Typography>
                    <Typography>
                        Карта сайта
                    </Typography>
                </AppBar>
            </Box>
        </>
    )
}

export { Footer }