import {Typography} from "@mui/material";
import React from "react";

const DateFormat = ({date}) => {

    const inputDate = new Date(date);

    const options = {  month: 'long', day: 'numeric' };
    const outputDateStr = inputDate.toLocaleDateString('ru-RU', options);

    return (
        <Typography sx={{fontWeight: '400', fontSize: '20px'}}>
            {outputDateStr}
        </Typography>
    );
}

export default DateFormat;