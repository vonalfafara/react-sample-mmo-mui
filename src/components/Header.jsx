import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MDrawer from "./Drawer"

const Header = () => {
  const redirect = useNavigate()
  const [drawerOpen, setDrawerOpen] = useState(false)

  function toggleDrawer() {
    setDrawerOpen((prev) => !prev)
  }

  function navigate(url) {
    redirect(url)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MMO Games
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }} onClick={() => navigate("/")}>Home</Button>
            <Button sx={{ color: '#fff' }} onClick={() => navigate("/news")}>News</Button>
            <Button sx={{ color: '#fff' }} onClick={() => navigate("/games")}>Games</Button>
            <Button sx={{ color: '#fff' }} onClick={() => navigate("/giveaways")}>Giveaways</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <MDrawer toggle={toggleDrawer} drawerOpen={drawerOpen} navigate={navigate}/>
      <Box component="main" sx={{ p: 4 }}>
      </Box>
    </Box>
  )
}

export default Header