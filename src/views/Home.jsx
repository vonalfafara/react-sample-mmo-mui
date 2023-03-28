import Hero from "../assets/hero.jpg"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import "../scss/Home.scss"

const Home = () => {
  return (
    <>
      <Box sx={{ 'height': '500px', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'gap': '2', 'position': 'relative'}}>
        <Box sx={{color: 'white', 'backgroundColor': 'rgba(0, 0, 0, .6)', 'padding': '2rem', 'borderRadius': '1rem'}}>
          <Typography variant="h3" component="h1">
            The last MMO Website you will ever need
          </Typography>
          <Typography variant="h6" component="h6">
            The last MMO Website you will ever need
          </Typography>
        </Box>
        <img className="hero" src={Hero} />
      </Box>
      <Container>
        <Box sx={{padding: '2rem'}}>
          <Typography variant="h5" component="h5" align="center">
            Whats new in MMO
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default Home