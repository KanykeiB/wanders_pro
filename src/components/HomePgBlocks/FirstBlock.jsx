import React from 'react';
import styles from './styles.module.css'
import image1 from '../assests/Frame 145964.png'
import image2 from '../assests/Frame 145963.png'
import image3 from '../assests/Frame 145965.png'
import image4 from '../assests/Frame 145966.png'
import image5 from '../assests/Frame 145967.png'
import image6 from '../assests/Frame 145968.png'

const FirstBlock = () => {
    return (
            <div>
            <div className={styles.row}>
                <div className={styles.col4}>
                    <div className={styles.box}>
                        <div>
                            <img src={image1} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={styles.col4}>
                    <div className={styles.box}>
                        <div>
                            <img src={image2} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={styles.col4}>
                    <div className={styles.box}>
                        <div className={styles.row}>
                            <div className={styles.col6}>
                                <div className={styles.box}>
                                    <img src={image3} alt=""/>
                                    <img src={image4} alt=""/>
                                </div>
                            </div>
                            <div className={styles.col6}>
                                <div className={styles.box}>
                                    <img src={image5} alt=""/>
                                    <img src={image6} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstBlock;