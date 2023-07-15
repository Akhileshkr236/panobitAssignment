import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GeoMap(props) {
  const defaultProps = {
    center: {
      lat: props.lat,
      lng: props.lng,
    },
    zoom: 11,
  };

  return (
    <div
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
