import Card from "./card";
import Home from "../pages/index";

export function initializeMap(mapboxgl, map, data) {
    /*map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
            },
            trackUserLocation: true,
        })
    );
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);

        let marker = new mapboxgl.Marker({
            anchor: "bottom",
        })
            .setLngLat([position.coords.longitude, position.coords.latitude])
            .addTo(map);
    }); */
    {
        data.users.map((dados) => {
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
                icon.addEventListener('click', () => console.log(dados._id));

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
        data.locais.map((dados) => {
            if (dados.latitude === undefined) {
            } else {
                let icon = document.createElement("div");
                icon.style.width = "50px";
                icon.style.backgroundSize = "contain";
                icon.style.content = "url(" + dados.avatar + ")";
                icon.style.cursor = "pointer";
                icon.addEventListener('click', () => console.log(dados._id));

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
}
