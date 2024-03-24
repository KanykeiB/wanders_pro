import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { tours } from "../../redux/selectors/selectors";
import { getTourList } from "../../redux/actions/tourActions";
import TourCard from "../../components/tourCard";

const TourCardHomePage = () => {
    const dispatch = useDispatch();
    const data = useSelector(tours);

    useEffect(() => {
        dispatch(getTourList());
    }, [dispatch]);

    const [visibleCards, setVisibleCards] = useState(4);
    const [showShowMoreButton, setShowShowMoreButton] = useState(true);
    const [showExpandButton, setShowExpandButton] = useState(false);

    const handleShowMoreButton = () => {
        setVisibleCards(prev => {
            const newVisibleCards = prev + 1;
            if (newVisibleCards >= data.length) {

                setShowExpandButton(true);
                if (visibleCards !== 4){
                    setShowShowMoreButton(false);
                }

                return newVisibleCards; // Возвращаем newVisibleCards, чтобы увеличить visibleCards на 1
            } else {
                return prev + 1; // Увеличиваем visibleCards на 1, чтобы показать следующий элемент
            }
        });
    };

    const handleExpandButton = () => {
        setVisibleCards(data.length - 1);
        setShowShowMoreButton(true); // Показываем кнопку "Show more" снова
        setShowExpandButton(false); // Скрываем кнопку "Hide"
    };

    return (
        <Box>
            <Box className={'row'}>
                {data.slice(visibleCards - 4, visibleCards).map(tour => (
                    <Box className={'col-3'} sx={{ marginBottom: '20px' }} key={tour.id}>
                        <TourCard tour={tour} />
                    </Box>
                ))}
            </Box>
            {showShowMoreButton && (
                <button onClick={handleShowMoreButton}>
                    Show more
                </button>
            )}
            {showExpandButton && (
                <button onClick={handleExpandButton}>
                    Hide
                </button>
            )}
        </Box>
    );
};

export default TourCardHomePage;