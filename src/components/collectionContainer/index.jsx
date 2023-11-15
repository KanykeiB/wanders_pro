import React, { useState } from 'react';
import styles from './style.module.css'
import CollectionCard from '../collectionCard';

const CollectionContainer = ({ data, onClick, page, category }) => {
    const [visibleItems, setVisibleItems] = useState(8)
    const handleShowMoreButton = () => {
        setVisibleItems((prev) => prev + 4)
    }
    return (
        <div className={styles.collectionContainerWrap}>
            {data.slice(0, visibleItems).map(el => (
                < CollectionCard
                    src={el.image}
                    onClick={onClick}
                    page={page}
                    category={el.category} >
                    {el.title}
                </CollectionCard>
            ))
            }
            {data.length > visibleItems &&
                <button className={styles.showMoreButton} onClick={handleShowMoreButton}>
                    Показать еще
                </button>}
        </div >

    );
};

export default CollectionContainer;