import React from "react";
import { table, registroUsers } from "./api/utils/AirtableUser";
import Box from "@material-ui/core/Box";
import Layout from "../src/components/Layout";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import SearchBar from "../src/components/SearchBar";
import Popover from "@material-ui/core/Popover";
import PopUp from "../src/components/PopUp";

export default function Home({ initialUsers }) {
  const [viewport, setViewport] = React.useState({
    latitude: -21.7557592,
    longitude: -43.3400294,
    zoom: 14.67,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
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
                src={dados.fields.Attachments[0].url}
                width="33px;"
                onClick={(even) => setAnchorEl(event.currentTarget)}
              />
              <img
                src={dados.fields.Attachments[0].url}
                width="33px;"
                onClick={() => PopUp(dados)}
              />
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "center",
                  horizontal: "center",
                }}
              ></Popover>
            </Marker>
          ))}
        </ReactMapGL>
        <SearchBar />
      </Box>
    </>
  );
}

function popUp(tipo) {
  return console.log(tipo);
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
