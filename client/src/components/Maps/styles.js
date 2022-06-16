import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100px",
  },
  mapContainer: {
    height: "40vh",
    width: "100%",
    justifyContent: "center",
    marginBottom: "37.5px"
  },
  markerContainer: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    "&:hover": { zIndex: 2 },
  },
  pointer: {
    cursor: "pointer",
  },
  centerButton: {
    backgroundColor: "black",
    padding: "1px 1px",
    marginBottom: "7.5px"
  }
}));
