import React, {useEffect, useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import TourReview from "./tourReview";

const TourReviews = ({reviews}) => {
    const [rating_average, setRatingAverage] = useState(0);

    useEffect(() => {
        const _rating_average = reviews?.reduce((acc, review) => acc + review.rating, 0);
        setRatingAverage(_rating_average / reviews?.length);
    }, [reviews]);

    const res_average = rating_average;
    const isReviewsLoaded = reviews?.length > 0;

    const [showMore, setShowMore] = useState(false)


    return (
        <Box>
            {isReviewsLoaded ?
                <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Button sx={rating_btn}>{res_average}</Button>
                        <Typography sx={rating_title} variant={'h4'}>
                            {reviews.length} отзыва {/*вот тут надо пофиксить отзыва-отзывов*/}
                        </Typography>
                    </Box>
                    <Box>
                        {
                            reviews.slice(0, 1).map((review) => (
                                <TourReview border={false} review={review}/>
                            ))
                        }
                    </Box>
                    <Box sx={reviews_box}>
                        {
                            reviews.slice(1, 3).map((review) => (
                                <TourReview border={true} review={review}/>
                            ))
                        }
                        {
                            showMore &&
                            reviews.slice(3).map((review) => (
                                <TourReview border={true} review={review}/>
                            ))
                        }
                        {showMore ?
                            <Button sx={show_more_btn} onClick={() => setShowMore(!showMore)}>
                                Скрыть отзывы
                            </Button>
                            :
                            <Button sx={show_more_btn} onClick={() => setShowMore(!showMore)}>
                                Показать все отзывы ({reviews.length})
                            </Button>
                        }
                    </Box>
                </Box>
                : <h2>loading...</h2>
            }
        </Box>
    );
};

const show_more_btn = {
    color: '#000',
    fontFamily: 'Gilroy',
    fontSize: '16px',
    fontWeight: '700',
    borderRadius: '10px',
    background: '#F5F5F5',
    textTransform: 'none',
    padding: '15px 0'
}

const reviews_box = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '40px 0 0 0',
}

const rating_btn = {
    borderRadius: "10px",
    background: "#0FA958",
    padding: "7px 12px",
    color: '#FFFFFF',
    fontFamily: "Gilroy",
}

const rating_title = {
    color: "#000",
    fontFamily: "Gilroy",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
}

export default TourReviews;