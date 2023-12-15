import React from 'react';
import styles from './style.module.css'
import { Link } from 'react-router-dom';
import arrow from '../../components/assests/Arrow.svg'

const CardPhoto = ({ link, photo, children }) => {
    return (
        <Link to={link}>
            <div className={styles.linkStyle}>
                <img src={photo} alt="" />
                <p>{children}</p>
                <img src={arrow} alt="" />
            </div>

        </Link>
    );
};

export default CardPhoto;