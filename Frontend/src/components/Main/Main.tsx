import { Box } from "@mui/material"
import image from "../../assets/velikoross.jpg"
import "./Main.css"

const itemData =
{
  img: image,
  title: "Великая_Россия",
  width: "100%",
  height: 440
}

const Main = () => {
    return (
        <main>
            <Box sx={{
        mt: "10px",
      }}>
                <img src={itemData.img} alt={itemData.title} width={itemData.width} height={itemData.height}/>
            </Box>
        </main>
    )
}

export { Main }