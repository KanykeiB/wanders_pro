import React from 'react';
import styles from "./style.module.css"
import { Link } from 'react-router-dom';

const CollectionCard = ({ src, children, onClick, page, category }) => {

    return (
        <div className={styles.collectionCardWrap} >
            <Link to={`/${page}/${category}`}>
                <img src={src} alt="noPictureWasFound " />
                <p className={styles.collectionCardTitle}>{children} </p>
            </Link>

        </div>
    );
};

export default CollectionCard;