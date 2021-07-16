import GoogleApiWrapper from "./GoogleApiWrapper";

export default function GoogleMap(props) {
    return (
        <div>
        <GoogleApiWrapper
        polyLine ={props.polyLine}
        apiKey = {props.apiKey}
        />
        </div>
    );
}
