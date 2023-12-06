import React from 'react';
import {Box, Typography} from "@mui/material";

const TourCardDesc = ({tour}) => {
    return (
        <Box sx={card_desc}>
            <Box sx={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                height: '32px'
            }}>
                {
                    tour.is_new ?
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px'
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <path d="M5.3648 2.55594C6.31503 0.85198 6.78977 0 7.5 0C8.21023 0 8.68497 0.85198 9.6352 2.55594L9.88119 2.99693C10.1512 3.48142 10.2862 3.72366 10.4962 3.88341C10.7062 4.04315 10.9687 4.1024 11.4937 4.2209L11.9706 4.3289C13.8156 4.74664 14.7373 4.95513 14.9571 5.66087C15.1761 6.36585 14.5476 7.10158 13.2899 8.5723L12.9644 8.95254C12.6074 9.37028 12.4281 9.57952 12.3479 9.83752C12.2676 10.0963 12.2946 10.3753 12.3486 10.9325L12.3981 11.4402C12.5879 13.4029 12.6831 14.3839 12.1086 14.8197C11.5342 15.2561 10.6702 14.8579 8.94372 14.0629L8.49598 13.8574C8.00549 13.6309 7.76024 13.5184 7.5 13.5184C7.23976 13.5184 6.99451 13.6309 6.50327 13.8574L6.05703 14.0629C4.32982 14.8579 3.46584 15.2554 2.89211 14.8204C2.31687 14.3839 2.41212 13.4029 2.60187 11.4402L2.65136 10.9332C2.70536 10.3753 2.73236 10.0963 2.65136 9.83827C2.57187 9.57952 2.39262 9.37028 2.03563 8.95329L1.71014 8.5723C0.452416 7.10233 -0.17607 6.3666 0.0429252 5.66087C0.26267 4.95513 1.18515 4.74589 3.03011 4.3289L3.50709 4.2209C4.03133 4.1024 4.29308 4.04315 4.50382 3.88341C4.71382 3.72366 4.84881 3.48142 5.11881 2.99693L5.3648 2.55594Z" fill="#0FA958"/>
                            </svg>
                            <Typography sx={title_new} variant={'h6'}>
                                Новый
                            </Typography>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="3" viewBox="0 0 2 3" fill="none">
                                <circle opacity="0.6" cx="1" cy="1.5" r="1" fill="#282828"/>
                            </svg>
                        </Box>
                        :
                        null
                }
                <Typography sx={card_location}>
                    {tour.location}
                </Typography>
            </Box>
            <Typography sx={tour_title} variant={'h3'}>
                {tour.title}
            </Typography>
            <Box>
                <Box sx={card_price}>
                    <Typography sx={{fontWeight: '700', fontSize: '24px'}}>{tour.price}</Typography>
                    <Typography sx={{fontWeight: '700', fontSize: '24px'}}>{tour.price_currency[0]}  /</Typography>
                    <Typography>{tour.duration}</Typography>
                </Box>
            </Box>
            <Typography sx={{fontWeight: '400', fontSize: '20px'}}>{tour.type}</Typography>
            <Box sx={{display: 'flex', gap: '10px'}}>
                <Typography sx={{fontWeight: '400', fontSize: '20px'}}>{tour.date}</Typography>
                {
                    tour.additional_dates.length > 1 ?
                        <Box sx={card_dates}>
                            + {tour.additional_dates.length} даты
                        </Box> :
                        <Box sx={card_dates}>
                            + 1 дата
                        </Box>
                }

            </Box>
        </Box>
    );
};

const card_dates = {
    borderRadius: '15px',
    color: '#0FA958',
    padding: '5px 8px 5px 8px',
    border: '2px #0FA958 solid',
    fontSize: '13px'
}

const card_price = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: "#282828",
}

const title_new = {
    color: '#0FA958',
    fontSize: '20px',
    fontWeight: '700',
    paddingRight: '5px'
}

const card_location = {
    color: '#282828',
    fontSize: '14px',
    fontWeight: '400',
}

const tour_title = {
    color: "#282828",
    fontSize: "20px",
    fontWeight: "400",
}

const card_desc = {
    padding: '15px 15px 30px 15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
}

export default TourCardDesc;