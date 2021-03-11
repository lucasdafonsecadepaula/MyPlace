import React from 'react';
import {table, registroUsers} from './api/utils/AirtableUser';
import Box from '@material-ui/core/Box';
import Layout from '../src/components/Layout';
import ReactMapGL, {Marker} from 'react-map-gl';
import SearchBar from '../src/components/SearchBar';



export default function Home({initialUsers}) { 
  const [viewport, setViewport] = React.useState({
    latitude: -21.7557592,
    longitude: -43.3400294,
    zoom: 14.67,
  });
  return (
    <>
      <Box>
        <Layout title="MyPlace"></Layout>
        <ReactMapGL
            mapStyle="mapbox://styles/lucasdafonsecadepaula/ckllb6f0i0v7g17qn7uk6apsd"
            mapboxApiAccessToken="pk.eyJ1IjoibHVjYXNkYWZvbnNlY2FkZXBhdWxhIiwiYSI6ImNrbGJrcjhzMDJyaDIzMm5ydDhsODgyZGEifQ.SU8e15tTWit54umOThvsBw"
            {...viewport} width="100vw" height="94vh" onViewportChange={setViewport}
            >
            {initialUsers.map(sla => (
              <Marker key={sla.id} latitude={sla.fields.Latitude} longitude={sla.fields.Longitude}>
                <img src="/pessoa.png" height="50px"/>
              </Marker>
            ))}
        </ReactMapGL>
        <SearchBar />
      </Box>
    </>
  )
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