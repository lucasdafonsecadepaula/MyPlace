import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    center:{
        width: '100vw',
    },
    root:{
        position: 'absolute',
        top: 750,
        display: 'flex',
        alignItems: 'center',
        width: 700,
        left: "34%",
    },
    input:{
        marginLeft: theme.spacing(1),
        flex: 1,   
    },
    iconButton:{
        padding: 10,
    },
}));

function SearchBar(){
    const classes = useStyles();

    return (
        <>
            <div className={classes.center}>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search"
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
        </>
    );
};

export default SearchBar;