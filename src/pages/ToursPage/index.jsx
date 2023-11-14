import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {tours} from '../../redux/selectors/selectors'
import {getTourList} from "../../redux/actions/tourActions";
import TourCard from "../../components/tourCard";
import {Box} from "@mui/material";

const ToursPage = () => {

    const dispatch = useDispatch()
    const data = useSelector(tours)

    useEffect(() => {
        dispatch(getTourList())
    }, [tours])

    return (
        <Box>
            <Box sx={tours_section}>
                {
                    data?.map(tour => (
                        <TourCard tour={tour}/>
                    ))
                }
            </Box>
        </Box>
    );
};

const tours_section = {
    maxWidth: '1140px',
    margin: '0 auto',
    display: 'flex',
    gap: '20px',
}

export default ToursPage;