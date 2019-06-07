import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AppsIcon from "@material-ui/icons/Apps";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  header: {
    width: "calc(100% - 10px)",
    margin: "5px"
  },
  title: {
    flexGrow: 1
  }
}));

const NavBar = ({ history }) => {
  const classes = useStyles();

  const handleOnClick = event => {
    history.push(`/${event.currentTarget.name}`);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={handleOnClick}
            name=""
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My personal web
          </Typography>
          <div>
            <IconButton
              aria-label="Apps"
              onClick={handleOnClick}
              color="inherit"
              name="apps"
            >
              <AppsIcon />
            </IconButton>
            <IconButton
              onClick={handleOnClick}
              aria-label="Profile page"
              color="inherit"
              name="profile"
            >
              <AccountCircle name="profile" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(NavBar);
