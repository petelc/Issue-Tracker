/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Contents from './Contents.jsx';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    position: 'relative',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
}));

function NavBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><a href="/">Home</a></MenuItem>
            <MenuItem onClick={handleClose}><a href="/#/issues">Issue List</a></MenuItem>
            <MenuItem onClick={handleClose}><a href="/#/report">Report</a></MenuItem>
          </Menu>
          <Typography className = {classes.title } variant="h6" color="inherit">
            Issue Tracker
          </Typography>
          <div className={classes.root}>
            <div className={classes.sectionDesktop}>
                <nav>
                    <a href="/">Home</a>
                    {' | '}
                    <a href="/#/issues">Issue List</a>
                    {' | '}
                    <a href="/#/report">Report</a>
                </nav>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default function Page() {
  return (
        <div>
            <NavBar/>
            <Contents />
        </div>
  );
}
