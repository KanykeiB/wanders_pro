import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { tours } from '../../../redux/selectors/selectors'
import { getTourBySort } from "../../../redux/actions/tourActions";
import TourCard from "../../../components/tourCard";
import { Box, Modal, formGroupClasses } from "@mui/material";
import Layout from "../../../components/layout_for_SideBarAndHeader";
import styles from './style.module.css'
import FilterModal from './filterModal';

const ToursPage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [sortApplied, setSortApplied] = useState('')
    const data = useSelector(tours)
    const handleSortTest = () => {
        setSortApplied('ordering=-concrete_tour__price_KGZ')
    }
    const dispatch = useDispatch()
    // useEffect(() => {
    //     getTourBySort(filterApplied, sortApplied)
    // }, [dispatch, filterApplied, sortApplied])
    return (
        <Layout>
            <Box className={'container'}>
                <button onClick={handleOpen}>
                    фильтры
                </button>
                <Modal
                    open={open}
                    onClose={handleClose}>
                    <div><FilterModal  applyFilter={handleClose}/></div>
                </Modal>

                <Box className={'row'}>
                    {/* <button onClick={handleSortTest} >Sort by highest to lowest</button> */}
                    {
                        data?.map((tour, key) => (
                            <Box key={key} className={'col-3'} sx={{ marginBottom: '20px' }}>
                                {/* <TourCard tour={tour} /> */}
                                <>
                                    <p>{tour.title}</p>
                                    <p>{tour.price_KGZ}</p>
                                </>
                            </Box>
                        ))
                    }
                </Box>
            </Box>
        </Layout>
    );
};
export default ToursPage;