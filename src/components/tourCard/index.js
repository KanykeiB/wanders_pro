import React from 'react';
import {Box} from "@mui/material";
import TourCardHeader from "./cardHeader";
import TourCardDesc from "./cardDesc";

const TourCard = ({tour}) => {


    return (
        <Box key={tour.id} sx={card}>
            <TourCardHeader tour={tour}/>
            <TourCardDesc tour={tour}/>
        </Box>
    );
};




const card = {
    borderRadius: "15px",
    background: "#F3F3F3",
    width: '270px',
    height: '100%',
    transition: '1.3s',
    // cursor: 'pointer'


    // '&:hover' : {
    //     transform: "translate(-2%,-3%)",
    // }
}

export default TourCard;