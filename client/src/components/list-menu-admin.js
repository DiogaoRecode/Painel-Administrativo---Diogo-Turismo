import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import Logout from '@mui/icons-material/Logout';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component="a" href="/admin">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton  component="a" href="/admin/usuarios">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Usuários" />
    </ListItemButton>
    <ListItemButton component="a" href="/admin/produtos">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Viagens" />
    </ListItemButton>
    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Opções
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <Logout />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItemButton>
  </React.Fragment>
);
