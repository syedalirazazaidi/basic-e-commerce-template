import React from 'react';
import { AppBar,Toolbar, Typography } from '@material-ui/core';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles(()=>({
    typographyStyles:{
        flex:1
    }
}))
const Header = () => {
    const classes=useStyles();
    return (
       <AppBar position='static'>
           <Toolbar>
               <Typography className={classes.typographyStyles}>syedAlirazaZaIDI</Typography>
               <AccountBoxRoundedIcon/>
           </Toolbar>
       </AppBar>
    );
}
 
export default Header;