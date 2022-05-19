import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { KeyboardReturn } from "@material-ui/icons";

import useStyles from "./styles";
import { useJsApiLoader, GoogleMap, Marker, Circle } from "@react-google-maps/api";

const  googleMapsApiKey = "" 
const coordinates = { lat: 40.8506 , lng: -73.8770 };

const Maps = () => {
  const classes = useStyles();
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey
  })

  const [map, setMap] = useState(/**@type google.maps.map*/ (null))
  

  if (!isLoaded) {
    return <></>
  }
 
  return (
    <div className={classes.mapContainer} >
        <Button className={classes.centerButton}
          onClick={() => map.panTo(coordinates)}>
            <KeyboardReturn htmlColor="#ffc500"/>
          </Button>
      <GoogleMap 
        center={coordinates} 
        zoom={13} 
        mapContainerStyle={{width: "100%", height: "100%"}}
        options= {{
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false
        }}
          onLoad={(map) => setMap(map)} >
          <Marker position={coordinates} />
          <Circle 
            position={coordinates}
            radius={3000}
            />
      </GoogleMap>
    </div> 
  );
};

export default Maps;