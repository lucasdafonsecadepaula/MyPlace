import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import { useUser } from "@auth0/nextjs-auth0";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        height: 56,
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
    },

    lbox: {
        display: "flex",
        alignItems: "center",
    },
    ltext: {
        paddingLeft: 10,
        color: "#757575",
        textDecoration: "none",
        "&:hover": {
            color: "#e7e7e7",
        },
    },
    rbox: {
        display: "flex",
        alignItems: "center",
        color: "#757575",
        float: "right",
        paddingRight: 15,
        position: "absolute",
        right: 10,
    },
    perfil: {
        cursor: "pointer",
        paddingRight: 20,
        height: 40,
    },
    rtext: {
        color: "#757575",
        textDecoration: "none",
        "&:hover": {
            color: "#e7e7e7",
        },
    },
}));

function TopBar() {
    const classes = useStyles();
    const { user, isLoading } = useUser();

    useEffect(() => {
        switch (document.URL) {
            case `http://localhost:3000/`:
                document.getElementById("1").style.color = "white";
                break;
            case `http://localhost:3000/chat`:
                document.getElementById("2").style.color = "white";
                break;
            case `http://localhost:3000/locais`:
                document.getElementById("3").style.color = "white";
                break;
            case `http://localhost:3000/eventos`:
                document.getElementById("4").style.color = "white";
                break;
            case `http://localhost:3000/carteira`:
                document.getElementById("5").style.color = "white";
                break;
            case `http://localhost:3000/perfil`:
                document.getElementById("6").style.color = "white";
                break;
        }
    }),
        [];

    return (
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Box className={classes.lbox}>
                    <a className={classes.ltext} href="/">
                        <h2 id="1">MyPlace</h2>
                    </a>
                </Box>
                <Box className={classes.lbox}>
                    <a href="/chat" className={classes.ltext}>
                        <h3 id="2">Chat</h3>
                    </a>
                    <a href="/locais" className={classes.ltext}>
                        <h3 id="3">Locais</h3>
                    </a>
                    <a href="/eventos" className={classes.ltext}>
                        <h3 id="4">Eventos</h3>
                    </a>
                    <a href="/carteira" className={classes.ltext}>
                        <h3 id="5">Carteira</h3>
                    </a>
                    <a href="/perfil" className={classes.ltext}>
                        <h3 id="6">Perfil</h3>
                    </a>
                </Box>

                <Box className={classes.rbox}>
                    {!user && (
                        <>
                            <a
                                href="http://localhost:3000/api/auth/login"
                                className={classes.rtext}
                            >
                                <h3>Entrar</h3>
                            </a>
                        </>
                    )}
                    {user && (
                        <>
                            <img
                                className={classes.perfil}
                                src={user.picture}
                            />
                            <a
                                href="http://localhost:3000/api/auth/logout"
                                className={classes.rtext}
                            >
                                <h3>Sair</h3>
                            </a>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
