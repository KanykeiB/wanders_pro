import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './style.module.css'
import mockApiData from '../../../components/mockApi/mockapiById';

const LocationPageById = () => {
    const { locationSpec } = useParams()
    const [visibleText, setVisibleText] = useState(500)
    const handleReadMore =()=>{
        setVisibleText((prev)=> prev + 300)
    }
    return (
        <div className={styles.locationByIdContainer}>
            {mockApiData.map(el => (
                <div>
                    <h2 className={styles.locationTitle}>{el.title}</h2>
                    <p className={styles.locationState}>{el.state}</p>
                    <div className={styles.cardWDescSection}>
                        <div className={styles.descPart}>
                            <p className={styles.shortDescrip}>
                                {el.shortDesc}
                            </p>
                            <p className={styles.coordiatesTitle}>Координаты:</p>
                            <p className={styles.shortDescrip}>{el.coordinates}</p>
                            {el.type.map(item => (
                                <button className={styles.locationTypes}>{item}</button>))}
                        </div>
                        <div className={styles.lPicPart}>
                            <div className={styles.imgWrap}>
                                <div className={styles.imgItem1}>
                                    <img src={el.pictures[0]} alt="" />
                                </div>
                                <div className={styles.imgItem2}>
                                    <img src={el.pictures[1]} alt="" />
                                    <img src={el.pictures[2]} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className={styles.description}>Описание</p>
                        <p>{el.description}</p>
                        <p className={styles.place}>{el.place}</p>
                        <p>{el.additionalDescription.slice(0,visibleText)}</p>
                        {el.additionalDescription.length> visibleText && 
                        <button onClick={handleReadMore} className={styles.readMoreButton}>Читать далее</button> }
                    </div>
                    <div>
                        <p className={styles.description}>Как добраться</p>
                        <p>{el.howToReach}</p>
                        {el.transoprt.map(transport=>(
                        <button className={styles.transportButton}>{transport}</button>))}
                        <p className={styles.smallerText}>Время в пути: <span>{el.time}</span></p> 
                        <p className={styles.smallerText}>Стоимость: <span>{el.price}</span></p>
                    </div>
                    <div>
                    <p className={styles.description}>Туры к ущелью Ала-Арча</p>
                    <span>to be filled</span>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default LocationPageById;