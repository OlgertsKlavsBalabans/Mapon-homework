import { InputLabel, TextField } from "@material-ui/core";

import CarRoutesMapStyle from "../CarRoutesMapStyle";

export default function PeriodInput(props) {
    const classes = (CarRoutesMapStyle())();

    return (
        <div className={[classes.flexFormField, classes.formFieldContainer].join(" ")}>
            Period
            <div className={classes.elementConatiner}>
                <InputLabel className={classes.baseFont} required id="fromDateLabel">From</InputLabel>
                <TextField
                    id="fromDate"
                    type="date"
                    value={props.fromDate}
                    onChange={(e) => { props.setFromDate(e.target.value) }}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
            <div className={classes.elementConatiner}>
                <InputLabel className={classes.baseFont} required id="toDateLabel">To</InputLabel>
                <TextField
                    id="toDate"
                    type="date"
                    value={props.tillDate}
                    onChange={(e) => { props.setTillDate(e.target.value) }}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        </div>
    );
}
