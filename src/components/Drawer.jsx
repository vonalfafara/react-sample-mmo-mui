import React from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

const MDrawer = ({drawerOpen, toggle, navigate}) => {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={toggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Box onClick={toggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            MMO Games
          </Typography>
          <Divider />
          <List>
            <ListItem disablePadding onClick={() => navigate("/")}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary="Home"/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => navigate("/news")}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary="News" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => navigate("/games")}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary="Games" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={() => navigate("/giveaways")}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary="Giveaways" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default MDrawer