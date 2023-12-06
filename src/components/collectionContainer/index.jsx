import React, {useState} from 'react';
import styles from './style.module.css'
import CollectionCard from '../collectionCard';

const CollectionContainer = ({data, page, children}) => {
    const [visibleItems, setVisibleItems] = useState(8)
    const handleShowMoreButton = () => {
        setVisibleItems((prev) => prev + 4)
    }
    return (
        <div className={styles.collectionContainer}>
            <h2>{children}</h2>
            <div className={styles.collectionContainerWrap}>
                {data.slice(0, visibleItems).map(el => (
                    < CollectionCard
                        src={el.image}
                        page={page}
                        category={el.category}>
                        {el.title}
                    </CollectionCard>
                ))
                }
                {data.length > visibleItems &&
                    <button className={styles.showMoreButton} onClick={handleShowMoreButton}>
                        Показать еще
                    </button>}
            </div>
        </div>

    );
};

export default CollectionContainer;