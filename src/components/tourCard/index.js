import React from 'react';
import {Box} from "@mui/material";
import TourCardHeader from "./cardHeader";
import TourCardDesc from "./cardDesc";
import {Link} from "react-router-dom";


const TourCard = ({tour}) => {

    return (
        <Link to={`/tour/${tour.id}`} style={{textDecoration: 'none', color: 'unset'}}>
            <Box
                key={tour.id}
                sx={card}
            >
                <TourCardHeader tour={tour}/>
                <TourCardDesc tour={tour}/>
            </Box>
        </Link>
    );
};




const card = {
    borderRadius: "15px",
    background: "#F3F3F3",
    width: '100%',
    height: '100%',
    transition: '1.3s',
    cursor: 'pointer',


    // '&:hover' : {
    //     transform: "translate(-2%,-3%)",
    // }
}

export default TourCard;