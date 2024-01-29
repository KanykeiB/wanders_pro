import React from 'react';
import styles from './style.module.css'
import greenStar from '../../components/assests/star_green.svg'
import verifiedIcon from '../../components/assests/verified_Icon.svg'

const GuideCard = ({ name, picture, rating, verified, comments }) => {
    return (
        <div className={styles.guideBox}>
            <div className={styles.guideWrap}>
                <div className={styles.guideName}>
                    <img src={picture} alt="" />
                    <h3>{name}</h3>
                </div>
                <div className={styles.guideText}>
                    <p>Организатор тура</p>
                    <div>
                        <img src={greenStar} alt="" />
                        {rating ? <p> {rating} ({comments} отзывов)</p> : <p>Новый</p>}
                    </div>
                    {verified ?
                        <div>
                            <img src={verifiedIcon} alt="" />
                            <p>Личность поттверждена</p>
                        </div> : 
                        <p></p>}
                </div>
            </div>
            <button className={styles.guideButton}>Написать</button>
        </div>
    );
};

export default GuideCard;