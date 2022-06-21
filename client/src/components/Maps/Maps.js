import React, { useState } from "react";
import { Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import useStyles from "./styles";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Circle,
} from "@react-google-maps/api";

const googleMapsApiKey = process.env.REACT_APP_API_KEY;
const coordinates = { lat: 40.825, lng: -73.89 };

const circleOptions = {
  strokeColor: "#0000FF",
  strokeOpacity: 0.9,
  strokeWeight: 2,
  fillColor: "#0000FF",
  fillOpacity: 0.2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 4200,
  zIndex: 1,
};

const Maps = () => {
  const classes = useStyles();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey,
  });

  const [map, setMap] = useState(/**@type google.maps.map*/ (null));

  if (!isLoaded) {
    return <></>;
  }

  return (
    <div className={classes.mapContainer}>
      <Button
        className={classes.centerButton}
        onClick={() => map.panTo(coordinates)}
      >
        <KeyboardReturnIcon htmlColor="green" />
      </Button>
      <GoogleMap
        center={coordinates}
        zoom={13}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          radius: 5000,
        }}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={coordinates} />
        <Circle center={coordinates} options={circleOptions} />
      </GoogleMap>
    </div>
  );
};

export default Maps;
