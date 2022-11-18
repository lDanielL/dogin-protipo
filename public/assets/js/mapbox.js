"use strict";

const MAPBOX_ACCESS_TOKEN = "ADD YOUR ACCESS TOKEN HERE";

const main = () => {
  mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

  const map = new mapboxgl.Map({
    container: "map",
    center: [2.0787281, 41.3948976],
    zoom: 12,
    style: "mapbox://styles/mapbox/dark-v10", //    /light-v10     /streets-v11     /satellite-v9
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var pos = [position.coords.longitude, position.coords.latitude];
        map.setCenter(pos);
      },
      () => alert("Issue retrieving your location")
    );
  } else {
    alert(" Your browser doesn't support Geolocation");
  }

};

window.addEventListener("load", main);
