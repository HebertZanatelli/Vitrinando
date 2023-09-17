import React, { useState } from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle,  } from '@material-ui/icons';

import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginLeft: 6
  },
  divider: {
    margin: '8px 0'
  },
  linkMenu: {
    textDecoration: 'none',
    color: 'black'
  } 
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorUserMenu, setAnchorUserMenu] = useState(false)
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3} >
        <Container maxWidth='lg'>
          <Toolbar >
            <Typography variant="h6" className={classes.title}>
              Vitrinando
            </Typography>
            <Link href='/user/publish' passHref >
              <Button
                color="inherit"
                variant='outlined'
                style={{ color: 'white', borderColor: 'inherit' }}>Anunciar e Vender</Button>
            </Link>
            <IconButton color="secondary" onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
              {
                true === false
                  ? <Avatar src="" />
                  : <AccountCircle />
              }
              <Typography variant="subtitle2" color="secondary" className={classes.userName}>
                Nome Cliente
              </Typography>
            </IconButton>

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
            >
              <Link href='/user/dashboard' passHref className={classes.linkMenu}>
                <MenuItem>Meus anúncios</MenuItem>
              </Link>
              <Link href='/user/publish' passHref className={classes.linkMenu}>
              <MenuItem>Publicar novo anúncio</MenuItem>
              </Link>

              <Divider className={classes.divider}/>
              <MenuItem>Sair</MenuItem>
            </Menu>
            
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}