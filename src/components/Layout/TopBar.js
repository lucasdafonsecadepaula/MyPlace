import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) => ({
    toolbar:{
        height:56,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
    },
    
    lbox: {
        display: 'flex',
        alignItems: 'center',
    },
    ltext: {
        paddingLeft: 10,
        color: '#757575',
        textDecoration: 'none',
    },
    rbox: {
        display: 'flex',
        alignItems: 'center',
        color: '#757575',
        float: 'right',
        paddingRight: 15,
        position: 'absolute',
        right: 10,
    },
    perfil: {
        cursor: 'pointer',
        paddingRight: 20,
        height: 40,
    },
    rtext: {
        color: '#757575',
        textDecoration: 'none',
        '&:hover':{
            color: '#e7e7e7',
        },
    },

}));


function TopBar(){
    const classes = useStyles();
  
    
    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                
                <Box className={classes.lbox}>
                    <a className={classes.ltext} href="">
                        <h2>MyPlace</h2>
                    </a>
                </Box>
                    
                <Hidden mdDown>
                    <Box className={classes.lbox}>
                        <a href="chat" className={classes.ltext}>
                            <h3>Chat</h3>
                        </a>
                        <a href="locais" className={classes.ltext}>
                            <h3>Locais</h3>
                        </a>
                        <a href="eventos" className={classes.ltext}>
                            <h3>Eventos</h3>
                        </a>
                        <a href="carteira" className={classes.ltext}>
                            <h3>Carteira</h3>
                        </a>
                    </Box>

                    <Box className={classes.rbox}>
                        <img className={classes.perfil}  src="/perfil.png" />
                        <a href="perfil" className={classes.rtext}>
                            <h3>Perfil</h3>
                        </a>
                    </Box> 
                </Hidden>
            </Toolbar>
        </AppBar>  
    )
};

export default TopBar;