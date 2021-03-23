import React, { useEffect, useState } from "react";
import { table, registroUsers } from "./api/utils/AirtableUser";
import Box from "@material-ui/core/Box";
import Layout from "../src/components/Layout";
import ReactMapGL, { Marker } from "react-map-gl";
import SearchBar from "../src/components/SearchBar";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

export default function Home({ initialUsers }) {
    const [modal, setModal] = useState(false);
    const [index, setIndex] = useState(0);
    const [viewport, setViewport] = React.useState({
        latitude: -21.7557592,
        longitude: -43.3400294,
        zoom: 14.67,
    });
    const openModal = (dados) => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
        });

        setIndex(initialUsers.indexOf(dados));

        setModal(true);
    };
    const closeModal = () => {
        setModal(false);
    };
    return (
        <>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <img
                        src={initialUsers[index].fields.Foto[0].url}
                        width="50px;"
                        height="50px"
                    />
                    <h3>{initialUsers[index].fields.Status}</h3>
                </div>
            </Modal>
            <Box>
                <Layout title="MyPlace"></Layout>
                <ReactMapGL
                    mapStyle="mapbox://styles/lucasdafonsecadepaula/ckllb6f0i0v7g17qn7uk6apsd"
                    mapboxApiAccessToken="pk.eyJ1IjoibHVjYXNkYWZvbnNlY2FkZXBhdWxhIiwiYSI6ImNrbGJrcjhzMDJyaDIzMm5ydDhsODgyZGEifQ.SU8e15tTWit54umOThvsBw"
                    {...viewport}
                    width="100vw"
                    height="94vh"
                    onViewportChange={setViewport}
                >
                    {initialUsers.map((dados) => (
                        <Marker
                            key={dados.id}
                            latitude={dados.fields.Latitude}
                            longitude={dados.fields.Longitude}
                        >
                            <img
                                src={dados.fields.Avatar[0].url}
                                width="33px;"
                                onMouseDown={() => openModal(dados)}
                            />
                        </Marker>
                    ))}
                </ReactMapGL>
                <SearchBar />
            </Box>
        </>
    );
}
export async function getServerSideProps(context) {
    try {
        const users = await table.select({}).firstPage();
        return {
            props: {
                initialUsers: registroUsers(users),
            },
        };
    } catch (err) {
        console.error(err);
        return {
            props: {
                err: "Algo deu errado!",
            },
        };
    }
}
