import React from 'react';
import {Box, Typography} from "@mui/material";
import TourRating from "../tourRating";

const TourReview = ({review, border}) => {

    const review_box = {
        fontFamily: "Gilroy",
        display: 'flex',
        gap: '20px',
        borderTop: border ?  '1px #D9D9D9 solid' : null,
        paddingTop: '40px'
    }

    return (
        <Box sx={review_box}>
            <Box>
                <Typography sx={user_logo} variant={'h5'}>
                    {review.user[0]}
                </Typography>
            </Box>
            <Box >
                <Box sx={{display: 'flex', gap: '10px'}}>
                    <Typography variant={'h3'} sx={{color: "#000", fontFamily: "Gilroy", fontSize: "20px", fontWeight: '700'}}>
                        {review.user}
                    </Typography>
                    <Typography variant={'h5'} sx={review_date}>
                        {review.date}
                    </Typography>
                </Box>
                <TourRating rating={review.rating}/>
                <Typography sx={raview_desc} variant={'h5'}>
                    {review.desc}
                </Typography>
            </Box>
        </Box>
    );
};



const raview_desc = {
    color: '#000',
    fontFamily: "Averta Demo PE",
    fontSize: '16px',
    padding: '11px 0  0 0'
}

const review_date = {
    color: '#D9D9D9',
    fontFamily: "Gilroy",
    fontSize: "20px",
    fontWeight: '700',
}

const user_logo = {
    color: "#FFF",

    // font-family: Gilroy;
    fontFamily: "Gilroy",
    fontSize: "40px",
    fontWeight: "700",
    background: '#00B3FF',
    borderRadius: '50px',
    // width: '77px',
    // height: '77px',
    padding: '14px 25px',
}

export default TourReview;