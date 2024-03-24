import React from 'react';
import CollectionContainer from '../../components/collectionContainer';
import data from "../../components/mockApi"
import FirstBlock from "../../components/HomePgBlocks/FirstBlock";
import Questions from "../../components/Dropdown-Questions/Questions/Questions";
import Contacts from "../../components/Contacts/Contacts";
import TourCardHomePage from "../../components/TourCardHomePage";






const HomePage = () => {


    return (
        <div className={'container2'} >

            <FirstBlock/>
            <TourCardHomePage/>
            <CollectionContainer 
            data={data} 
            page={'tours'}
            length={''}>Коллекции туров</CollectionContainer>
            <Questions/>
            <Contacts/>
        </div>
    );
};

export default HomePage;