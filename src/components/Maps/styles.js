import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  paper: {
    display: "flex", flexDirection: "column", justifyContent: "center", width: "100px",
  },
  mapContainer: {
    height: "40vh", width: "100%", position: "relative", right: "2.5%", bottom: "1.5%"
  },
  markerContainer: {
    position: "absolute", transform: "translate(-50%, -50%)", zIndex: 1, 
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
  },
  centerButton : {
    backgroundColor: "black", padding: "1px 1px", position: "relative", bottom: "3%"
    },
    "&:hover": {
      backgroundColor: "blue"
    },
}));