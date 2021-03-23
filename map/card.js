import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Modal from "react-modal";
import { makeStyles } from "@material-ui/core/styles";

Modal.setAppElement("#__next");

function Card() {
    const classes = useStyles();
    const [modal, setModal] = useState(true);
    const closeModal = () => {
        setModal(false);
    };

    const useStyles = makeStyles((theme) => ({
        cardRoot: {
            height: 56,
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
        },
    }));
    

    return (
        <AppBar>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                className={classes.cardRoot}
                contentLabel="Example Modal"
            >
                <div>
                    <h3>SLA</h3>
                </div>
            </Modal>
        </AppBar>
    );
}

export default Card;
