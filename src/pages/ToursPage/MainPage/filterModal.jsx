import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style.module.css'
import { tags, tours } from '../../../redux/selectors/selectors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { typeAccommodationOptions, difficultyLevelOptions, comfortLevelOptions, typeTourOptions, languageChoice } from '../../../dictionary/dictionary'
import { getTourByFilter, getTourTags } from '../../../redux/actions/tourActions';

const CustomInput = ({ type, isVisible, name, id, onChange, children, value, className, placeHolder, checked }) => {
    return <div className={isVisible ? styles.isLaptop : styles.isMobile}>
        <input className={`${className}${value ? ' ' + styles.checked : ''}`} type={type} name={name} id={id} value={value} onChange={onChange} placeholder={placeHolder} checked={checked} />
        <label for={id} className={styles.customLabel}>{children}</label>
    </div>
}
const initialState = {
    type_tour: '',
    amount_of_days_min: '',
    amount_of_days_max: '',
    price_KGZ_min: '',
    price_KGZ_max: '',
    collection: [],
    tourRating: [],
    type_accommodation: [],
    difficulty_level: '',
    comfort_level: '',
    language: ''
}
const CustomDropDownButtons = ({ tag, name, isVisible, clear, visibility }) => {
    return <div className={styles.buttonShowMore}>
        {tag.length > 0 ? <div> <p className={styles.selectedTagsCount} >{tag.length}
            <button onClick={() => { clear(name) }} >x</button></p> </div> : ''}
        <button className={isVisible ? styles.visible : styles.invisible} onClick={() => { visibility(name, false) }}><KeyboardArrowDownIcon fontSize="small" /> </button>
        <button className={isVisible ? styles.invisible : styles.visible} onClick={() => { visibility(name, true) }}> < NavigateNextIcon fontSize="small" /></button>
    </div>
}
const FilterModal = ({ applyFilter, resetFilter }) => {
    const [filterApplied, setFilterApplied] = useState(initialState)
    const [changeIcon, setChangeIcon] = useState(true)
    const [visibleItem, setVisibleItem] = useState({})
    const handleVisibiltyByTag = (tag) => {
        setVisibleItem((prev) => ({
            ...prev,
            [tag]: !prev[tag]
        }))
        setChangeIcon(!changeIcon)
    }
    const handleClearTag = (property) => {
        setFilterApplied((prev) => ({
            ...prev,
            [property]: ''
        }))

    }
    const handleRadioInput = (property, value) => {
        setFilterApplied((prevState) => ({
            ...prevState,
            [property]: value
        }))
    }
    const handleResetFilter = () => {
        setFilterApplied(initialState)

    }
    console.log(filterApplied, 'ji')
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
                    <p onClick={handleResetFilter}>Сбросить</p>
                    <p>Фильтры</p>
                    <p onClick={applyFilter}>Готово</p>
                </div>
                <div className={styles.filtrationInput}>
                    <div className={styles.filtrationCol}>
                        <div className={styles.filtrationrow}>
                            <p>Вид тура</p>
                            {Object.values(typeTourOptions).map((el) => {
                                const key = Object.keys(typeTourOptions).find(key => typeTourOptions[key] === el)
                                return <div>
                                    <CustomInput type='radio' name="type_tour" id={key} className={styles.radioInput} isVisible={true} checked={filterApplied.type_tour.includes(key)}
                                        onChange={() => { handleRadioInput("type_tour", key) }}
                                    >{el}</CustomInput>
                                </div>
                            })}
                            <CustomInput type='radio' name="type_tour" className={styles.radioInput} isVisible={true}
                                onChange={() => { handleRadioInput("type_tour", '') }}
                            >Любой</CustomInput>
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
                                <CustomDropDownButtons tag={filterApplied.collection} clear={handleClearTag} visibility={handleVisibiltyByTag} name={'collection'} isVisible={visibleItem.collection} />
                            </div>
                            <div className={`${styles.filtrationrow} ${styles.scrollableContainer}`}>
                                <div className={styles.scrollableContent}>
                                    {tagsFilt && tagsFilt.collections?.map((el) => {
                                        return <CustomInput type="checkbox" id={el.collection}
                                            isVisible={visibleItem.collection}
                                            checked={filterApplied.collection.includes(el.collection)}
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
                            <CustomDropDownButtons tag={filterApplied.tourRating} clear={handleClearTag} visibility={handleVisibiltyByTag} name={'tourRating'} isVisible={visibleItem.tourRating} />
                            </div>
                            <div >
                                {listOfRating.map((el) => {
                                    return <CustomInput type="checkbox" id={el}
                                        checked={filterApplied.tourRating.includes(el)}
                                        isVisible={visibleItem.tourRating}
                                        className={styles.customCheckBox}
                                        onChange={() => { handleCheckboxInput("tourRating", el) }}
                                    >{el}</CustomInput>
                                })}
                            </div>

                        </div>
                        <div className={styles.filtrationrow}>
                            <div className={styles.showTextWrap}><p>Проживание</p>
                            <CustomDropDownButtons tag={filterApplied.type_accommodation} clear={handleClearTag} visibility={handleVisibiltyByTag} name={'type_accommodation'} isVisible={visibleItem.type_accommodation} /></div>
                            {Object.values(typeAccommodationOptions).map((el) => {
                                const key = Object.keys(typeAccommodationOptions).find(key => typeAccommodationOptions[key] === el)
                                return <CustomInput type="checkbox" id={key} className={styles.customCheckBox} isVisible={visibleItem.type_accommodation} checked={filterApplied.type_accommodation.includes(key)}
                                    onChange={() => { handleCheckboxInput("type_accommodation", key) }}
                                >{el}</CustomInput>
                            })}
                        </div>
                    </div>
                    <div className={styles.filtrationCol}>
                        <div className={styles.filtrationrow}>
                            <div className={styles.showTextWrap}> <p>Комфорт проживания</p>
                            <CustomDropDownButtons tag={filterApplied.comfort_level} clear={handleClearTag} visibility={handleVisibiltyByTag} name={'comfort_level'} isVisible={visibleItem.comfort_level} /></div>
                            {Object.values(comfortLevelOptions).map((el) => {
                                const key = Object.keys(comfortLevelOptions).find(key => comfortLevelOptions[key] === el)
                                return <CustomInput type="checkbox" id={key}
                                    checked={filterApplied.comfort_level.includes(key)}
                                    className={styles.customCheckBox}
                                    isVisible={visibleItem.comfort_level}
                                    onChange={() => { handleCheckboxInput("comfort_level", key) }}
                                >{el}</CustomInput>
                            })}
                        </div>
                        <div className={styles.filtrationrow}>
                            <div className={styles.showTextWrap}><p>Уровень активности</p>
                            <CustomDropDownButtons tag={filterApplied.difficulty_level} clear={handleClearTag} visibility={handleVisibiltyByTag} name={'difficulty_level'} isVisible={visibleItem.difficulty_level} /></div>
                            {Object.values(difficultyLevelOptions).map((el) => {
                                const key = Object.keys(difficultyLevelOptions).find(key => difficultyLevelOptions[key] === el)
                                return <CustomInput type="checkbox" id={key}
                                    checked={filterApplied.difficulty_level.includes(key)}
                                    isVisible={visibleItem.difficulty_level}
                                    className={styles.customCheckBox}
                                    onChange={() => { handleCheckboxInput("difficulty_level", key) }}
                                >{el}</CustomInput>
                            })}
                        </div>
                        <div className={styles.filtrationrow}>
                            <div className={styles.showTextWrap}><p>Язык тура</p>
                            <CustomDropDownButtons tag={filterApplied.language} clear={handleClearTag} visibility={handleVisibiltyByTag} name={'language'} isVisible={visibleItem.language} /></div>
                            {Object.values(languageChoice).map((el) => {
                                const key = Object.keys(languageChoice).find(key => languageChoice[key] === el)
                                return <CustomInput
                                    checked={filterApplied.language.includes(key)}
                                    isVisible={visibleItem.language}
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
                    <button className={styles.resetFilter} onClick={handleResetFilter}>Сбросить фильтры</button>
                    <button className={styles.applyFilter} onClick={applyFilter}>Применить</button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;