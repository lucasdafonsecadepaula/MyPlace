import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
import { connectToDatabase } from "../mongodb/mongodb";
import Layout from "../src/components/Layout";
import SearchBar from "../src/components/SearchBar";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Link from "next/link";

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

export default function Home({ properties }) {

    const [pageIsMounted, setPageIsMounted] = useState(false);
    const [Map, setMap] = useState();

    const [indexUser, setIndexUser] = useState(0);
    const [indexEsta, setIndexEsta] = useState(0);

    const [modalUser, setModalUser] = useState(false);
    const [modalEsta, setModalEsta] = useState(false);

    const openModalUser = (dados) => {
        setIndexUser(properties.users.indexOf(dados));
        setModalUser(true);
    };
    const closeModalUser = () => {
        setModalUser(false);
    };

    const openModalEsta = (dados) => {
        setIndexEsta(properties.locais.indexOf(dados));
        setModalEsta(true);
    };
    const closeModalEsta = () => {
        setModalEsta(false);
    };

    mapboxgl.accessToken =
        "pk.eyJ1IjoibHVjYXNkYWZvbnNlY2FkZXBhdWxhIiwiYSI6ImNrbGJrcjhzMDJyaDIzMm5ydDhsODgyZGEifQ.SU8e15tTWit54umOThvsBw";
    useEffect(() => {
        setPageIsMounted(true);

        let map = new mapboxgl.Map({
            container: "my-map",
            style:
                "mapbox://styles/lucasdafonsecadepaula/ckllb6f0i0v7g17qn7uk6apsd",
            center: [-43.3400294, -21.7557592],
            zoom: 14.67,
        });
        {
            properties.users.map((dados) => {
                if (dados.latitude === undefined) {
                } else {
                    /* POPUP CONFIG
                    let div = window.document.createElement("div");
                    div.style.content = "url(" + dados.avatar + ")";
                    let popup = new mapboxgl.Popup({
                        anchor: "bottom",
                        offset: [0, -64],
                        closeButton: false,
                    }).setDOMContent(div);*/
                    let icon = document.createElement("div");
                    icon.style.width = "40px";
                    icon.style.backgroundSize = "contain";
                    icon.style.content = "url(" + dados.avatar + ")";
                    icon.style.cursor = "pointer";
                    icon.addEventListener("click", () => openModalUser(dados));

                    let marker = new mapboxgl.Marker(icon, {
                        anchor: "bottom",
                        offset: [0, 5],
                    })
                        .setLngLat([
                            parseFloat(dados.longitude),
                            parseFloat(dados.latitude),
                        ])
                        //.setPopup(popup)  //POPUP
                        .addTo(map);
                }
            });
        }
        {
            properties.locais.map((dados) => {
                if (dados.latitude === undefined) {
                } else {
                    let icon = document.createElement("div");
                    icon.style.width = "50px";
                    icon.style.backgroundSize = "contain";
                    icon.style.content = "url(" + dados.avatar + ")";
                    icon.style.cursor = "pointer";
                    icon.addEventListener("click", () => openModalEsta(dados));

                    let marker = new mapboxgl.Marker(icon, {
                        anchor: "bottom",
                        offset: [0, 5],
                    })
                        .setLngLat([
                            parseFloat(dados.longitude),
                            parseFloat(dados.latitude),
                        ])
                        .addTo(map);
                }
            });
        }
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                    enableHighAccuracy: true,
                },
                trackUserLocation: true,
            })
        );
        setMap(map);
    }, []);

    return (
        <>
            <Modal
                isOpen={modalUser}
                onRequestClose={closeModalUser}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <img src={properties.users[indexUser].foto} height="75px" />
                    <h1>{properties.users[indexUser].name}</h1>
                    <h2>{properties.users[indexUser].status}</h2>
                </div>
            </Modal>
            <Modal
                isOpen={modalEsta}
                onRequestClose={closeModalEsta}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <img
                        src={properties.locais[indexEsta].foto}
                        height="75px"
                    />
                    <Link
                        href={`/locais/[locais]?locais=${properties.locais[indexEsta].name}`}
                        as={`/locais/${properties.locais[indexEsta].name}`}
                    >
                        <a>{properties.locais[indexEsta].name}</a>
                    </Link>
                    <h2>{properties.locais[indexEsta].status}</h2>
                </div>
            </Modal>
            <div className={styles.container}>
                <Head>
                    <title>Create Next App</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
                        rel="stylesheet"
                    />
                </Head>
                <Layout title="MyPlace"></Layout>
                <main>
                    <div id="my-map" className={styles.sla} />
                </main>
                <SearchBar />
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const { db } = await connectToDatabase();
    const users = await db.collection("users").find({}).limit(25).toArray();
    const locais = await db.collection("locais").find({}).limit(25).toArray();
    const usersJson = JSON.parse(JSON.stringify(users));
    const locaisJson = JSON.parse(JSON.stringify(locais));
    const properties = {
        users: usersJson,
        locais: locaisJson,
    };
    return {
        props: { properties: properties },
    };
}
