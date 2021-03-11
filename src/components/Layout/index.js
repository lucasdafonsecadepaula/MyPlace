import { makeStyles } from '@material-ui/core';
import Head from 'next/head';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundcolor: theme.palette.grey.A400,
        display: 'flex',
        height: 56,
        overflow: 'hidden',
        width: "100vw",
    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
        [theme.breakpoints.up('lg')]:{
            paddingLeft: 256,
        }
    },
    contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto',
    },
    map: {
        overflow: 'hidden',
    }

}));


function Layout( { children, title } ) {
    const classes = useStyles();

    return ( 
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width" />
            </Head>

 
            <div className={classes.root}>
                <TopBar></TopBar>
                <div className={classes.map}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;