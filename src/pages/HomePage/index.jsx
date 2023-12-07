import React from 'react';
import CollectionContainer from '../../components/collectionContainer';
import data from "../../components/mockApi"

const HomePage = () => {


    return (
        <div >
            <CollectionContainer 
            data={data} 
            page={'tours'}
            length={''}>Коллекции туров</CollectionContainer>
        </div>
    );
};

export default HomePage;