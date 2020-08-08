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
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import '../public/style.css';

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
      <AppBar>
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
            <MenuItem onClick={handleClose}>
                <Link to="/">
                    <Button>
                        Home
                    </Button>
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
            <Link to="/#/issues">
                    <Button color="secondary">
                        Issues List
                    </Button>
                </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link to="/report">
                    <Button color="primary">
                        Reports
                    </Button>
                </Link>
            </MenuItem>
          </Menu>
          <Typography className = {classes.title } variant="h6" color="inherit">
            Issue Tracker
          </Typography>
          <div className={classes.root}>
            <div className={classes.sectionDesktop}>
                <nav>
                    <Link to="/">
                        <Button color="secondary">
                            Home
                        </Button>
                    </Link>
                    {' | '}
                    <Link to="/#/issues">
                        <Button color="secondary">
                            Issues List
                        </Button>
                    </Link>
                    {' | '}
                    <Link to="/report">
                        <Button color="secondary">
                            Reports
                        </Button>
                    </Link>
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
        <div className="adj">
            <NavBar/>
            <Contents />
        </div>
  );
}
