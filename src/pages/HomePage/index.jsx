import React from 'react';
import CollectionContainer from '../../components/collectionContainer';
import data from "../../components/mockApi"
import ToursPage from "../ToursPage";
import FirstBlock from "../../components/HomePgBlocks/FirstBlock";







const HomePage = () => {

    return (
        <div  className={'container'}>
            <FirstBlock/>
            <ToursPage/>
            <CollectionContainer 
            data={data} 
            page={'tours'}
            length={''}>Коллекции туров</CollectionContainer>
        </div>
    );
};

export default HomePage;