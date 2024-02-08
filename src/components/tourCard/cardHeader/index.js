import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import FavoriteButton from "../../favoriteBtn";
import EcoIcon from "../../assests/ecoIcon";

const TourCardHeader = ({tour}) => {

    const cardHeader = {
        backgroundImage: `url(${tour.tour_images[0]})`,
        height: '245px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '15px',
        transition: '1.6s',
    }

    return (
        <Box style={cardHeader} className={'card-background'}>
            <Box sx={{
                padding: '15px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '137px',
            }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <Button
                        variant="contained"
                        sx={type_btn}
                    >
                        {tour.collection[0].collection}
                    </Button>
                    <FavoriteButton tour={tour}/>
                </Box>
                <Box sx={author_and_eco}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <img
                            src={tour.user_avatar}
                            // alt="user photo"
                            style={{
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                objectFit: 'cover'
                            }}
                        />
                        <Typography sx={card_title} variant={'h5'}>{tour.user}</Typography>
                    </Box>
                    {/*{*/}
                    {/*    tour.eco ? <EcoIcon/> : null*/}
                    {/*}*/}
                </Box>
            </Box>
        </Box>
    );
};


const type_btn = {
    borderRadius: "15px",
    background: "#FFF",
    border: 'none',
    color: '#282828',
    fontSize: '14px',
    fontWeight: '400',

    '&:hover' : {
        background: '#0FA958'
    }
}


const card_title = {
    color: "#FFF",
    fontSize: "15px",
    fontWeight: '700'
}

const author_and_eco = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

export default TourCardHeader;