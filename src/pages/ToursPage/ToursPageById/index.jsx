import React, { useState } from 'react';
import styles from './style.module.css'
import mockApiDataTour from '../../../components/mockApi/mockapiTourById';
import DropDownText from '../../../components/dropdownText';

const TourPageById = () => {
    const [showAll, setShowAll] = useState(true)
    const handleShowAll = () => {
        setShowAll(!showAll)
    }

    return (
        <div>
            <div className={styles.dropDownTitleWrap}>
                <p className={styles.sectionName}>Программа</p>
                <button  className={styles.showAllButton} onClick={handleShowAll}>Раскрыть все</button>
            </div>
                {mockApiDataTour.map(el => (
                    <>
                        {el.programs.map(item => (
                            <DropDownText
                                title={item.title}
                                isAllVisible={showAll}
                                pictures={item.pictures.slice(0, 3).map(pic => (
                                    <img src={pic} alt="" />
                                ))}
                            >
                                {item.description}</DropDownText>
                        ))}
                    </>
                ))}
            </div>
    );
};

export default TourPageById;