import * as React from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';



function Map({users}) {
  const [viewport, setViewport] = React.useState({
    latitude: -21.7557592,
    longitude: -43.3400294,
    zoom: 14.67,
  });
  return (
    <>
         <ReactMapGL
            mapStyle="mapbox://styles/lucasdafonsecadepaula/ckllb6f0i0v7g17qn7uk6apsd"
            mapboxApiAccessToken="pk.eyJ1IjoibHVjYXNkYWZvbnNlY2FkZXBhdWxhIiwiYSI6ImNrbGJrcjhzMDJyaDIzMm5ydDhsODgyZGEifQ.SU8e15tTWit54umOThvsBw"
            {...viewport} width="100vw" height="94vh" onViewportChange={setViewport}
            >
        </ReactMapGL>
    </>
  );
}
export default Map;
