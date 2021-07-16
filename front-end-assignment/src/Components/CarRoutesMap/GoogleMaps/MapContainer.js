import { Map, Marker, Polyline } from "google-maps-react";

export default function MapContainer(props) {
    let showPath = false;

    if (props.polyLine.length > 0) {
        showPath = true;
    }

    return (
        <Map 
        google={props.google} 
        defaultZoom={16}
        center={showPath ? { lat: props.polyLine[0].lat, lng: props.polyLine[0].lng } : {lat: 0, lng: 0}}
        
        >
            {showPath && (
                <Marker
                    color
                    title={'This is the start of the route.'}
                    name={'Start'}
                    position={{ lat: props.polyLine[0].lat, lng: props.polyLine[0].lng }} />
            )}
            {showPath && (
                <Marker
                    title={'This is the end of the route.'}
                    name={'End'}
                    position={{ lat: props.polyLine[props.polyLine.length - 1].lat, lng: props.polyLine[props.polyLine.length - 1].lng }} />
            )}
            {showPath && (
                <Polyline
                    path={props.polyLine}
                    strokeColor="#18a0fb"
                    strokeOpacity={0.8}
                    strokeWeight={2} />
            )}

        </Map>
    );
}