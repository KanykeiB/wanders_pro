import React, {useState} from 'react';
import {Box, Button} from "@mui/material";
import Datepicker from "./DatePicker/Datepicker";
import DatepickerIcon from "../Icons/datepickerIcon";
import SearchIcon from "../Icons/searchIcon";
import dateSearchStyle from './style.module.css';
import {useForm} from "react-hook-form";

const DatepickerAndSearch = () => {


    // const [startDay, endDay] = dateRange;
    const [searchTour, setSearchTour] = useState('')

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <Box className={dateSearchStyle.app_header_search}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={dateSearchStyle.searchAndDatePicker}
            >
                <Box className={dateSearchStyle.compact_search}>
                    <Box className={dateSearchStyle.as_input_search}>
                        <Box className={dateSearchStyle.search_icon}>
                            <SearchIcon/>
                        </Box>
                        <Box>
                            <input
                                type="text"
                                placeholder="Куда поедем?"
                                {...register("search")}
                                value={searchTour}
                                className={dateSearchStyle.search}
                                onChange={(e) => setSearchTour(e.target.value)}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={dateSearchStyle.compactDivider}></Box>
                <Box className={dateSearchStyle.compact_search}>
                    <Box className={dateSearchStyle.as_input_search}>
                        <Box className={dateSearchStyle.search_icon}>
                            <DatepickerIcon/>
                        </Box>
                        <Box>
                            <Datepicker
                                control={control}
                                name="date"
                                // startDay={startDay}
                                // endDay={endDay}
                            />
                        </Box>
                    </Box>
                </Box>
                <Button type="submit" className={dateSearchStyle.searchBtn}>
                    <span className={dateSearchStyle.button_body}>Найти</span>
                </Button>
            </form>
        </Box>
    );
};

export default DatepickerAndSearch;