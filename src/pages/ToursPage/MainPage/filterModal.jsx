import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.css'
import { tags, tours } from '../../../redux/selectors/selectors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { typeAccommodationOptions, difficultyLevelOptions, comfortLevelOptions, typeTourOptions, languageChoice } from '../../../dictionary/dictionary'
import { getTourByFilter, getTourTags } from '../../../redux/actions/tourActions';

const CustomInput = ({ type, isVisible, name, id, onChange, children, value, className, placeHolder }) => {
    return <div className={isVisible ? styles.isLaptop : styles.isMobile}>
        <input className={`${className}${value ? ' ' + styles.checked : ''}`} type={type} name={name} id={id} value={value} onChange={onChange} placeholder={placeHolder} />
        <label for={id} className={styles.customLabel}>{children}</label>
    </div>
}

const FilterModal = ({ applyFilter, resetFilter }) => {
    const [filterApplied, setFilterApplied] = useState({
        type_tour: '',
        amount_of_days_min: null,
        amount_of_days_max: null,
        price_KGZ_min: null,
        price_KGZ_max: null,
        collection: [],
        // tourRating: [],
        type_accommodation: [],
        difficulty_level: '',
        comfort_level: '',
        language: ''
    })
    const [visibleItem, setVisibleItem] = useState({})
    const handleVisibiltyByTag = (tag, value) => {
        setVisibleItem((prev) => ({
            ...prev,
            [tag]: !prev[tag]
        }))

    }
    console.log(visibleItem, 'check')
    const [isVisible, setIsVisible] = useState(true)
    // console.log(isVisible, 'visible')
    const handleRadioInput = (property, value) => {
        setFilterApplied((prevState) => ({
            ...prevState,
            [property]: value
        }))
    }
    const handleCheckboxInput = (property, value) => {
        setFilterApplied((prev) => {
            if (prev[property].includes(value)) {
                return {
                    ...prev,
                    [property]: prev[property].filter((el) => el !== value)
                };
            }
            else {
                return {
                    ...prev,
                    [property]: [...prev[property], value]
                }
            }
        })
    }
    const handleVisibility = () => {
        setIsVisible(!isVisible)
    }
    const dispatch = useDispatch()
    const tagsFilt = useSelector(tags)
    const data = useSelector(tours)
    useEffect(() => {
        dispatch(getTourTags())
    }, [])
    useEffect(() => {
        dispatch(getTourByFilter(filterApplied))
    }, [dispatch, filterApplied])
    const listOfRating = ['Отлично (4.5+)', 'Хорошо (4+)', 'Нормально (3+)']
    return (
        <div>
            <div className={styles.modalWrap}>
                <div className={styles.modalTitle}>
                    <p onClick={resetFilter}>Сбросить</p>
                    <p>Фильтры</p>
                    <p onClick={applyFilter}>Готово</p>
                </div>
                <div className={styles.filtrationInput}>
                    <div className={styles.filtrationCol}>
                        <div className={styles.filtrationrow}>
                            <p>Вид тура</p>
                            {Object.values(typeTourOptions).map((el) => {
                                const key = Object.keys(typeTourOptions).find(key => typeTourOptions[key] === el)
                                return <CustomInput type='radio' name="type_tour" id={key} className={styles.radioInput} isVisible={true}
                                    onChange={() => { handleRadioInput("type_tour", key) }}
                                >{el}</CustomInput>
                            })}
                        </div>
                        <div className={styles.filtrationrow}>
                            <p>Длительность</p>
                            <div className={styles.filtrationrowWrap}>
                                <CustomInput type="number"
                                    isVisible={true}
                                    className={styles.customForm}
                                    placeHolder={'От, дней'}
                                    value={filterApplied.amount_of_days_min}
                                    onChange={(e) => { handleRadioInput('amount_of_days_min', e.target.value) }}
                                />
                                <CustomInput type="number"
                                    isVisible={true}
                                    className={styles.customForm}
                                    placeHolder={'До, дней'}
                                    value={filterApplied.amount_of_days_max}
                                    onChange={(e) => { handleRadioInput('amount_of_days_max', e.target.value) }}
                                />
                            </div>
                        </div>
                        <div className={styles.filtrationrow}>
                            <p>Цена</p>
                            <div className={styles.filtrationrowWrap}>
                                <CustomInput type="number"
                                    isVisible={true}
                                    className={styles.customForm}
                                    placeHolder={'От, сом'}
                                    value={filterApplied.price_KGZ_min}
                                    onChange={(e) => { handleRadioInput('price_KGZ_min', e.target.value) }}
                                />
                                <CustomInput type="number"
                                    isVisible={true}
                                    className={styles.customForm}
                                    placeHolder={'До, сом'}
                                    value={filterApplied.price_KGZ_max}
                                    onChange={(e) => { handleRadioInput('price_KGZ_max', e.target.value) }}
                                />
                            </div>
                        </div>

                    </div>
                    <div className={styles.filtrationCol}>
                        <div className={styles.filtrationrow}>
                            <div className={styles.showTextWrap}><p>Подборки</p>
                                <button className={styles.visible} onClick={() => { handleVisibiltyByTag('collections', true) }}><KeyboardArrowDownIcon fontSize="small"/></button></div>
                            <div className={`${styles.filtrationrow} ${styles.scrollableContainer}`}>
                                <div className={styles.scrollableContent}>
                                    {tagsFilt && tagsFilt.collections?.map((el) => {
                                        return <CustomInput type="checkbox" id={el.collection}
                                            isVisible={visibleItem.collections}
                                            className={styles.customCheckBox}
                                            value={filterApplied.collection.includes(el.collection)}
                                            onChange={() => { handleCheckboxInput("collection", el.collection) }}
                                        >{el.collection}</CustomInput>
                                    })} </div></div>
                        </div>

                    </div>
                    <div className={styles.filtrationCol}>
                        <div className={styles.filtrationrow}>
                        <div className={styles.showTextWrap}><p>Рейтинг организатора</p>
                            <button className={styles.visible} onClick={() => { handleVisibiltyByTag('rating', true) }}><KeyboardArrowDownIcon fontSize="small"/></button></div>
                            <div >
                                {listOfRating.map((el) => {
                                    return <CustomInput type="checkbox" id={el}
                                        isVisible={visibleItem.rating}
                                        className={styles.customCheckBox}
                                        onChange={() => { handleCheckboxInput("tourRating", el) }}
                                    >{el}</CustomInput>
                                })}
                            </div>

                        </div>
                        <div className={styles.filtrationrow}>
                        <div className={styles.showTextWrap}><p>Проживание</p>
                            <button className={styles.visible} onClick={() => { handleVisibiltyByTag('accommodation', true) }}><KeyboardArrowDownIcon fontSize="small"/></button></div>
                            {Object.values(typeAccommodationOptions).map((el) => {
                                const key = Object.keys(typeAccommodationOptions).find(key => typeAccommodationOptions[key] === el)
                                return <CustomInput type="checkbox" id={key} className={styles.customCheckBox} isVisible={visibleItem.accommodation}
                                    onChange={() => { handleCheckboxInput("type_accommodation", key) }}
                                >{el}</CustomInput>
                            })}
                        </div>
                    </div>
                    <div className={styles.filtrationCol}>
                        <div className={styles.filtrationrow}>
                        <div className={styles.showTextWrap}> <p>Комфорт проживания</p>
                            <button className={styles.visible} onClick={() => { handleVisibiltyByTag('comfortLevel', true) }}><KeyboardArrowDownIcon fontSize="small"/></button></div>
                            {Object.values(comfortLevelOptions).map((el) => {
                                const key = Object.keys(comfortLevelOptions).find(key => comfortLevelOptions[key] === el)
                                return <CustomInput type="checkbox" id={key}
                                    className={styles.customCheckBox}
                                    isVisible={visibleItem.comfortLevel}
                                    onChange={() => { handleCheckboxInput("comfort_level", key) }}
                                >{el}</CustomInput>
                            })}
                        </div>
                        <div className={styles.filtrationrow}>
                        <div className={styles.showTextWrap}><p>Уровень активности</p>
                            <button className={styles.visible} onClick={() => { handleVisibiltyByTag('activityLevel', true) }}><KeyboardArrowDownIcon fontSize="small"/></button></div>
                            {Object.values(difficultyLevelOptions).map((el) => {
                                const key = Object.keys(difficultyLevelOptions).find(key => difficultyLevelOptions[key] === el)
                                return <CustomInput type="checkbox" id={key}
                                    isVisible={visibleItem.activityLevel}
                                    className={styles.customCheckBox}
                                    onChange={() => { handleCheckboxInput("difficulty_level", key) }}
                                >{el}</CustomInput>
                            })}
                        </div>
                        <div className={styles.filtrationrow}>
                        <div className={styles.showTextWrap}><p>Язык тура</p>
                            <button className={styles.visible} onClick={() => { handleVisibiltyByTag('tourLanguage', true) }}><KeyboardArrowDownIcon fontSize="small"/></button></div>
                            {Object.values(languageChoice).map((el) => {
                                const key = Object.keys(languageChoice).find(key => languageChoice[key] === el)
                                return <CustomInput
                                    isVisible={visibleItem.tourLanguage}
                                    className={styles.customCheckBox}
                                    type="checkbox"
                                    id={key}
                                    onChange={() => { handleCheckboxInput("language", key) }}
                                >{el}</CustomInput>
                            })}
                        </div>
                    </div>
                </div>
                <div className={styles.resultButtons}>
                    <p>{data.length == 1 ? "Найден" : "Найдено"} {data.length} {data.length == 1 ? "тур" : (data.length > 0 && data.length < 5) ? "тура" : "туров"}</p>
                    <button className={styles.resetFilter}>Сбросить фильтры</button>
                    <button className={styles.applyFilter} onClick={applyFilter}>Применить</button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;