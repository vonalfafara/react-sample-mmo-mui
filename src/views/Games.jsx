import http from "../lib/axios"
import Box from "@mui/material/Box"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Container from "@mui/material/Container"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const categories = [
  "Shooter",
  "MMORPG",
  "battle-royale",
  "Strategy",
  "Fighting",
  "Card",
  "action-rpg",
  "Racing",
  "MOBA",
  "Sports",
  "MMOFPS",
  "MMO",
  "Social",
  "MMORPG",
  "Fantasy"
]

const platforms = ['pc', 'browser']

const Games = () => {
  const navigate = useNavigate()
  const [games, setGames] = useState([])
  const [category, setCategory] = useState('')
  const [platform, setPlatform] = useState('')
  const [sortBy, setSortBy] = useState('')

  useEffect(() => {
    getGames()
    return () => {}
  }, [])

  useEffect(() => {
    getGames()
    return () => {}
  }, [category, platform, sortBy])

  async function getGames() {
    let params = [category, platform, sortBy].filter(param => param)
    params = params.join('&')
    const url = `/games${params.length ? '?' + params : ''}`
    const res = await http.get(url)
    setGames(res.data)
  }

  function changeCategory(e) {
    setCategory(`category=${e.target.value}`)
  }

  function changePlatform(e) {
    setPlatform(`platform=${e.target.value}`)
  }

  function changeSort(e) {
    setSortBy(`sort-by=${e.target.value}`)
  }

  function navigateToGame(game) {
    navigate(`/games/${game.id}`)
  }

  return (
    <Container>
      <Box sx={{p: 2}}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Filter Options</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl>
              <FormLabel id="category-group">Categories</FormLabel>
              <RadioGroup
                aria-labelledby="category-group"
                name="category-group"
                onChange={changeCategory}
              >
                {categories.map((category, index) => {
                  return (
                    <FormControlLabel key={index} value={category} control={<Radio />} label={category} />
                  )
                })}
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="platform-group">Platforms</FormLabel>
              <RadioGroup
                aria-labelledby="platform-group"
                name="platform-group"
                onChange={changePlatform}
              >
                {platforms.map((category, index) => {
                  return (
                    <FormControlLabel key={index} value={category} control={<Radio />} label={category} />
                  )
                })}
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel id="sort-group">Sort by</FormLabel>
              <RadioGroup
                aria-labelledby="sort-group"
                name="sort-group"
                onChange={changeSort}
              >
                <FormControlLabel value='release-date' control={<Radio />} label='Release Date' />
                <FormControlLabel value='alphabetical' control={<Radio />} label='Alphabetical' />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{p: 2}}>
        <Grid container spacing={2} sx={{}}>
          {games.map((game, index) => {
            return (
              <Grid key={index} xs={3} sx={{display: 'flex', alignItems: 'stretch'}}>
                <Card>
                  <CardActionArea sx={{ maxWidth: 345, height:'100%', display:'flex', flexDirection: 'column', justifyContent: 'flex-start' }} onClick={() => navigateToGame(game)}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={game.thumbnail}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {game.title}
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        {game.release_date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {game.short_description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Container>
  )
}

export default Games