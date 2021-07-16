import {GoogleApiWrapper } from "google-maps-react";

import MapContainer from "./MapContainer";

export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.apiKey,
  }
))(MapContainer)
