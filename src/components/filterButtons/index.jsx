import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTourByFilter } from '../../redux/actions/tourActions';
import styles from './styles.module.css'
import filterIcon from '../../components/assests/page_info.svg'
import line from '../../components/assests/line.svg'

// const popularTags = ['Прогулка', 'Велотур', 'Пешие туры', 'Туры на 3 дня']
const FilterButtons = ({ popularTags, onClick}) => {
    const [filterButton, setFilterButton] = useState({})
    const [toggleAll, setToggleAll] = useState(true)
    const handleFilterAll = (property, value) => {
        setFilterButton({})
        setToggleAll(true)
    }
    const handleFilterButton = (property, value) => {
        setFilterButton((prev) => ({
            ...prev,
            [property]: value
        }))
        setToggleAll(false)
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTourByFilter(filterButton))
        // getTourBySort(filterApplied, sortApplied)
    }, [dispatch, filterButton])
    return (
        <div className={styles.buttonWrap}>
            <button className={styles.filterButton} onClick={onClick}>Фильтры <img src={filterIcon} alt="" /></button>
            <img src={line} alt="" />

            <button className={toggleAll ? styles.filterButtonAll : styles.filterButtonAllOff} onClick={handleFilterAll}>Все</button>
            {popularTags.length > 0 ? popularTags.map((item) => {
                return <button className={styles.filterButtonItem} onClick={() => handleFilterButton('collection', item)}>{item}</button>
            }) : ''}
        </div>
    );
};

export default FilterButtons;