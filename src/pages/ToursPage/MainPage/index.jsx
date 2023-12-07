import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box} from "@mui/material";
import {tours} from "../../../redux/selectors/selectors";
import {getTourList} from "../../../redux/actions/tourActions";
import TourCard from "../../../components/tourCard";

const ToursPage = () => {

    const dispatch = useDispatch()
    const data = useSelector(tours)

    useEffect(() => {
        dispatch(getTourList())
    }, [dispatch])

    return (
        <Box className={'container'}>
            <Box className={'row'}>
                {
                    data?.map(tour => (
                        <Box className={'col-3'} sx={{marginBottom: '20px'}}>
                            <TourCard tour={tour}/>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    );
};


export default ToursPage;