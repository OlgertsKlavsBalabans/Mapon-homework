import { makeStyles } from "@material-ui/core";


export default function CarRoutesMapStyle() {
    document.body.style = 'background: #F2F2F2;';

    const CarRoutesMapStyle = makeStyles((theme) => ({
        baseFont: {
            fontFamily: "MuseoSans",
            fontSize: "14px",
            lineHeight: "19px",
            /* identical to box height */
            color: "#384045",
        },
        routReportContainer: {

            position: "absolute",
            left: "16.67%",
            right: "16.67%",
            top: "13.47%",



            marginLeft: "auto",
            marginRight: "auto",

            background: "#FFFFFF",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 2px 14px rgba(0, 0, 0, 0.06)",
            borderRadius: "3px",
        },
        flexFormField: {
            display: "flex",
        },
        formContainer: {
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "40px",
        },
        formFieldContainer: {
            paddingTop: "10px",
            paddingBottom: "10px",
        },
        elementConatiner: {
            paddingLeft: "10px",
            paddingRight: "10px",
        },
        floatRightSide: {
            float: "right",
        },
        title: {
            fontFamily: "MuseoSans",
            fontSize: "24px",
            lineHeight: "28px",
            /* identical to box height */
            color: "#384045",
        },

    }));

    return CarRoutesMapStyle;
}

