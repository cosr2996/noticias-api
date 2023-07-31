import  Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useNoticias from "../hooks/useNoticias"
import { Pagination,Stack } from "@mui/material"
import Noticia from "./Noticia"

const ListadoNoticias = () => {
    const {noticias,totalNoticias,handleChangePagina,pagina}= useNoticias()
    const totalPaginas = Math.ceil(totalNoticias/20)
  return (
    <>
    <Typography textAlign={'center'} marginY={5} variant="h3" component={'h2'}>
        Ultimas Noticias
    </Typography>

    <Grid container spacing={2}>
            {noticias.map(noticia=>(
                <Noticia noticia={noticia} key={noticia.url}/>
            ))}
    </Grid>

    <Stack sx={{marginY:5}} spacing={2} direction={'row'} justifyContent={'center'} alignItems={'center'}>
        <Pagination count={totalPaginas} color="primary" onChange={handleChangePagina} page={pagina}/>
    </Stack>
    </>
  )
}

export default ListadoNoticias