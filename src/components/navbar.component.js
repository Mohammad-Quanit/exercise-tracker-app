import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    textDecoration: 'none'
  },
});


const Navbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton style={{ alignSelf: 'right' }} edge="start" color="inherit" aria-label="Menu" aria-owns>
            <MenuIcon aria-owns={anchorEl ? 'simple-menu' : undefined} aria-haspopup="true" onClick={handleClick} />
            <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} TransitionComponent={Fade}>
              <Link to="/" style={{ color: 'black' }} className={classes.root}>
                <MenuItem onClick={handleClose}>Exercises</MenuItem>
              </Link>
              <Link to="/create" style={{ color: 'black' }} className={classes.root}>
                <MenuItem onClick={handleClose}>New Exercise</MenuItem>
              </Link>
              <Link to="/user" style={{ color: 'black' }} className={classes.root}>
                <MenuItem onClick={handleClose}>New User</MenuItem>
              </Link>
            </Menu>
          </IconButton>
          <Link to="/" style={{ color: 'white' }} className={classes.root}>
            <Typography variant="h6" color="inherit">
              Exercise Tracker App
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;
