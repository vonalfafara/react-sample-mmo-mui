import { useParams } from "react-router-dom"
import Container from "@mui/material/Container"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import { useEffect, useState } from "react"
import http from "../lib/axios"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Game = () => {
  const [game, setGame] = useState()
  const { id } = useParams()

  useEffect(() => {
    async function getGame() {
      const res = await http.get(`/game?id=${id}`)
      console.log(res.data)
      setGame(res.data)
    }
    getGame()

    return
  }, [])
  return (
    <>
      {
        game && (
          <>
          <Box sx={{ 'height': '300px', 'position': 'relative', mb: 4}}>
            <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={game.screenshots[0].image} />
          </Box>
          <Container>
            <Box sx={{p: 2}}>
              <Typography variant="h4" component="h4">
                {game.title}
              </Typography>
              <Typography variant="subtitle2">
                {game.short_description}
              </Typography>
              <div dangerouslySetInnerHTML={{__html: game.description}} style={{marginBottom: '2rem'}}></div>
              <Carousel autoPlay infiniteLoop>
                {game.screenshots.map(({image}) => {
                  return (
                    <div>
                      <img src={image} />
                    </div>
                  )
                })}
              </Carousel>
              <Typography variant="p" component="p">
                Genre: {game.genre}
              </Typography>
              <Typography variant="p" component="p">
                Platform: {game.platform}
              </Typography>
              <Typography variant="p" component="p">
                Release Date: {game.release_date}
              </Typography>
            </Box>
          </Container>
        </>
        )
      }
    </>
  )
}

export default Game