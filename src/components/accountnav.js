import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { Link } from "react-router-dom";
import BrowseMenu from "./browsemenu";
import withStyles from "@material-ui/core/styles/withStyles";
import Logo from "../img/GEMINT.png";
import ThemeSwitcher from "./ThemeSwitcher";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

class AccountNav extends Component {
  logoutHandler = (event) => {
    localStorage.removeItem("AuthToken");
  };
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <div className="navbar">
            <ul>
              <Link to="/">
                <img className="navbrand" src={Logo} />
              </Link>
              <li>
                <Link to="/orders">ORDERS</Link>
              </li>
              <li>
                <Link to="/settings">MY ACCOUNT</Link>
              </li>
              <li>
                <span className="nav-divider"></span>
              </li>
              <li>
                <Link to="/browse">BROWSE</Link>
              </li>
            </ul>
          </div>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <Link to="/orders">
                <ListItem button key="Orders">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Orders" />
                </ListItem>
              </Link>

              <Link to="/settings">
                <ListItem button key="Settings">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <Link>
                <ListItem button key="Logout" onClick={this.logoutHandler}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sign out" />
                </ListItem>
              </Link>
              <ThemeSwitcher />
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(AccountNav);
