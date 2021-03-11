import Head from "next/head";
import { useEffect, useState } from "react";
import { addDataLayer } from "../map/addDataLayer.js";
import { initializeMap } from "../map/initializeMap";
import styles from "../styles/Home.module.css";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
import {table, registroUsers} from './api/utils/AirtableUser';

export default function Home({initialUsers}) {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState();
  const data  = initialUsers;

  mapboxgl.accessToken ="pk.eyJ1IjoibHVjYXNkYWZvbnNlY2FkZXBhdWxhIiwiYSI6ImNrbGJrcjhzMDJyaDIzMm5ydDhsODgyZGEifQ.SU8e15tTWit54umOThvsBw";
  useEffect(() => {
    setPageIsMounted(true);
    let map = new mapboxgl.Map({
      container: "my-map",
      style: "mapbox://styles/lucasdafonsecadepaula/ckllb6f0i0v7g17qn7uk6apsd",
      center: [-43.3400294, -21.7557592],
      zoom: 14.67,
    });

    initializeMap(mapboxgl, map);
    setMap(map);
  }, []);

  useEffect(() => {
    if (pageIsMounted && data) {
      Map.on("load", function () {
        addDataLayer(Map, data);
      });
    }
  }, [pageIsMounted, setMap, data, Map]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div id="my-map" className={styles.sla} />
      </main>
    </div>
  );
}



export async function getServerSideProps(context){
    try {
      const users = await table.select({}).firstPage();
      return{
        props: {
          initialUsers: registroUsers(users),
        }
      }
    } catch (err) {
      console.error(err);
      return {
        props: {
          err: "Algo deu errado!"
        }
    }
  }
  }