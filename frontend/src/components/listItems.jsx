import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import { Fastfood, Home, LocalBar, ShoppingCart, Store, StoreMallDirectory, Whatshot } from '@material-ui/icons';
import ReviewsIcon from '@mui/icons-material/Reviews';
import { ManageAccounts, Newspaper, ShoppingBag } from '@mui/icons-material';

export const adminListItems = (
  <React.Fragment>
    <Link to={'/manager'}>
      <ListItemButton>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>
    <Link to={'/manager'}>
      <ListItemButton>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Schedule" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const customerListItems = (
  <React.Fragment>
  <Link to={'/items'}>
    <ListItemButton>
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
  </Link>
  
  
  </React.Fragment>
);


export const guestListItems = (
  <React.Fragment>
  <Link to={''}>
    <ListItemButton>
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
  </Link>
  <Link to={'/items'}>
    <ListItemButton>
      <ListItemIcon>
        <Fastfood />
      </ListItemIcon>
      <ListItemText primary="Items" />
    </ListItemButton>
  </Link>
  
  </React.Fragment>
);