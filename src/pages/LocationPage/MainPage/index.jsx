import React from 'react';
import CollectionContainer from '../../../components/collectionContainer';
import data from "../../../components/mockApi"
import styles from './style.module.css'
const LocationPage = () => {
    return (
        <div className={styles.locationContainer}>
            <p className={styles.locationPageTitle}>Локации</p>
            <CollectionContainer data={data} page={'locations'} length={data.length}>Нарынская область</CollectionContainer>
            <CollectionContainer data={data} page={'locations'} length={data.length}>Иссык-Кульская область</CollectionContainer>
            <CollectionContainer data={data} page={'locations'} length={data.length}>Чуйская область</CollectionContainer>
            <CollectionContainer data={data} page={'locations'} length={data.length}>Ошская область</CollectionContainer>
        </div>
    );
};

export default LocationPage;