import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom';
import BrowseMenu from './browsemenu';
import GuestNav from '../components/guestnav';
import UserNav from '../components/usernav';


const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  });

class navigation extends Component {

    render() {
        const { classes } = this.props;
        const isAuthenticated = localStorage.getItem('AuthToken');
        function DynamicNav(props) {
            if (isAuthenticated) {    return  <UserNav />;  }  return <GuestNav />;
        }

        return(
            <div className={classes.root}>
                <DynamicNav />
            </div>
           
        )
    }

}

export default withStyles(styles)(navigation);