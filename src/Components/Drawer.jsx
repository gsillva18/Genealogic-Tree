import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import ErrorIcon from '@mui/icons-material/Error';
import { IconButton, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';


export default function TemporaryDrawer() {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)


  function OpenDrawer(){
    return(
      setIsDrawerOpen(true)
    )
  }

  const list = () => (
    <Box
      role="presentation"
      onClick={() => setIsDrawerOpen(false)}
      onKeyDown={() => setIsDrawerOpen(false)}
    >
      <List sx={{ justifyContent: "end", display: 'flex'}}>
        <ListItem
        secondaryAction={
           <IconButton edge="end" >
           <KeyboardDoubleArrowLeftIcon fontSize='large'/>
         </IconButton>
        } sx={{paddingTop: '2.3rem'}}>
        </ListItem>
      </List>
      <Divider />
      <List>
        {['Perfil', 'Sair'].map((text, index) => (
          <ListItem key={text} disablePadding alignItems='center'>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <AccountBoxIcon /> : 
                index ===1 ? <LogoutIcon /> : <ErrorIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        theme={theme}
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        {list()}
      </Drawer>
      <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setIsDrawerOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
    </>
  );
}