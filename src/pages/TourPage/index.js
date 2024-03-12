import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import TourReviews from "../../components/tourReviews";
import {useDispatch, useSelector} from "react-redux";
import {getTourById} from "../../redux/actions/tourActions";
import {tour_retrieve} from "../../redux/selectors/selectors";

const TourPage = () => {
    const id = useParams().id
    const dispatch = useDispatch()
    const tour = useSelector(tour_retrieve)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getTourById(id))
        setLoading(false)
    }, [])


    return (
        <div className={'container'}>
            {   loading ? <h2>loading....</h2>:
                <div>
                    <TourReviews reviews={tour.reviews}/>
                </div>
            }

        </div>
    );
};

export default TourPage;