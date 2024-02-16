import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {tours} from '../../../redux/selectors/selectors'
import {getTourList} from "../../../redux/actions/tourActions";
import TourCard from "../../../components/tourCard";
import {Box} from "@mui/material";
import Layout from "../../../components/layout_for_SideBarAndHeader";

const ToursPage = () => {

    const dispatch = useDispatch()
    const data = useSelector(tours)

    useEffect(() => {
        dispatch(getTourList())
    }, [dispatch])

    return (
        <Layout>
            <Box className={'container'}>
                <Box className={'row'}>
                    {
                        data?.map((tour, key) => (
                            <Box key={key} className={'col-3'} sx={{marginBottom: '20px'}}>
                                <TourCard tour={tour}/>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Layout>
    );
};


export default ToursPage;