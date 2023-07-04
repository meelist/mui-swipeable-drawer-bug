import GoogleMapReact from "google-map-react";
import SwipeableEdgeDrawer from "./SwipeableEdgeDrawer";

function App() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="App">
      <div style={{ height: "100vh", width: "100%" }}>
        {/* when using below line instead and elements dont overlap, then works correctly */}
        {/* <div style={{ height: "calc(100vh - 56px)", width: "100%" }}> */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
      <SwipeableEdgeDrawer />
    </div>
  );
}

export default App;
