import { InputLabel, MenuItem, Select } from "@material-ui/core";

import CarRoutesMapStyle from "../CarRoutesMapStyle";

export default function VehicleNumberInput(props) {
    const classes = (CarRoutesMapStyle())();

    return (
        <div className={[classes.flexFormField, classes.formFieldContainer].join(" ")}>
            <InputLabel className={classes.baseFont} required id="vehicleNumberSelectLabel">Vehicle number</InputLabel>
            <div className={classes.elementConatiner}>
                <Select
                    id="vehicleNumberSelect"
                    value={props.vehicleId}
                    onChange={(e) => { props.setVehicleId(e.target.value) }}
                    label="Vehicle number"
                >
                    {props.unitData.map((unit) => {
                        return (<MenuItem key={unit.unit_id} value={unit.unit_id}>{unit.number}</MenuItem>);
                    })}
                </Select>
            </div>


        </div>
    );
}
