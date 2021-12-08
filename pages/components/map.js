"use strict";
import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

import React from "react";
mapboxgl.accessToken =
  "pk.eyJ1IjoibXJiZWFzdDAwNyIsImEiOiJja3Z2NTdkOWkxODF5Mm9tOTA2MGliaGZuIn0.SUJiS0xxFoc_3dv_IRRbjQ";

const Map = (props) => {
  console.log(props);

  useEffect(() => {
    // initialize map only once
    const map = new mapboxgl.Map({
      //Location  in HTML
      container: "map",
      //Type of map
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      //lan lat
      center: [76.931646, 31.711129],
      zoom: 4,
    });
    if (props.pickupCoordinates && props.dropOffCoordinates) {
      addToMap(map, props.pickupCoordinates, props.dropOffCoordinates);
      map.fitBounds([props.pickupCoordinates, props.pickupCoordinates], {
        padding: 60,
        zoom: 7,
      });
    }
  }, [[props.pickupCoordinates, props.dropOffCoordinates]]);

  const addToMap = (map, cords1, coords2) => {
    const marker1 = new mapboxgl.Marker().setLngLat(cords1).addTo(map);

    const marker2 = new mapboxgl.Marker().setLngLat(coords2).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;
const Wrapper = tw.div`
flex-1 h-1/2`;
