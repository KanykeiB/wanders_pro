import React from 'react';
import {Box, Rating} from "@mui/material";

const TourRating = ({rating}) => {
    return (
        <Box sx={{paddingTop: '5px'}}>
            <Rating
                name="text-feedback"
                value={rating}
                readOnly
                precision={0.5}
                // emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
        </Box>
    );
};

export default TourRating;