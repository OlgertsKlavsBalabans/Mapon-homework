import React, { useEffect } from "react";

import axios from "axios";
import 'date-fns';

import { Button } from "@material-ui/core";

import CarRoutesMapStyle from "./CarRoutesMapStyle";
import GoogleMap from "./GoogleMaps/GoogleMap";
import VehicleNumberInput from './FormElements/VehicleNumberInput';
import PeriodInput from './FormElements/PeriodInput';


export default function CarRoutesPage(props) {
    // Enter the api keys
    const API_KEY = "";
    const GOOGLE_MAP_KEY = "";

    const CAR_NUMBER_URL = "https://www.mapon.com/api/v1/unit/list.json?key=" + API_KEY;
    const ROUTE_URL_BASE = "https://www.mapon.com/api/v1/route/list.json?key=" + API_KEY;
    const [unitData, setUnitData] = React.useState([]);
    const [fromDate, setFromDate] = React.useState("2021-07-09");
    const [tillDate, setTillDate] = React.useState("2021-07-16");
    const [vehicleId, setVehicleId] = React.useState("");
    const [polyLine, setPolyLine] = React.useState([]);
    const [displayMap, setDisplayMap] = React.useState(false);

    useEffect(() => {
        getUnitData();
    }, []);

    const makeNewMap = async () => {
        //Get data from api
        let routeUrl = ROUTE_URL_BASE + "&from=" + fromDate + "T00:00:00Z&till=" + tillDate + "T00:00:00Z&unit_id=" + vehicleId + "&include[]=decoded_route";
        let data = await axios.get(routeUrl);
        let temporaryPolyLine = [];
        //Get polyline from data
        if (data.data.data) {
            data.data.data.units[0].routes.forEach(route => {
                if (route.decoded_route) {
                    if (route.decoded_route.points) {
                        temporaryPolyLine = temporaryPolyLine.concat(route.decoded_route.points);
                    }
                };
            });
        }
        //Show the map
        setPolyLine(temporaryPolyLine);
        setDisplayMap(true);
    }

    const getUnitData = async () => {
        let data = await axios.get(CAR_NUMBER_URL);
        setUnitData(data.data.data.units);
    };

    const classes = (CarRoutesMapStyle())();
    return (
        <div className={classes.baseFont}>
            <div className={classes.routReportContainer}>
                <div className={classes.formContainer}>
                    <div className={[classes.title, classes.formFieldContainer].join(" ")}>
                        Route report
                    </div>

                    <VehicleNumberInput
                        unitData={unitData}
                        vehicleId={vehicleId}
                        setVehicleId={setVehicleId}
                    />

                    <PeriodInput
                        fromDate={fromDate}
                        tillDate={tillDate}
                        setFromDate={setFromDate}
                        setTillDate={setTillDate}
                    />
                </div>
                {displayMap && (
                    <GoogleMap 
                    polyLine={polyLine}
                    apiKey={GOOGLE_MAP_KEY}
                     />
                )}
                <div className={classes.floatRightSide} >
                    <Button
                        onClick={(e) => {
                            makeNewMap();
                        }}
                    >Generate</Button>
                </div>
            </div>
        </div>
    );
}
