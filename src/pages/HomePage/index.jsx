import React from 'react';
import CollectionContainer from '../../components/collectionContainer';
import data from "../../components/mockApi"

const HomePage = () => {
    const handleClickOnCard =()=>{
        console.log('i was pressed')
    }
    return (
        <div>
            hi, I am HomePage
            <p>Коллекции туров</p>
            <CollectionContainer data={data} onClick={handleClickOnCard} page={'tours'}/>
        </div>
    );
};

export default HomePage;