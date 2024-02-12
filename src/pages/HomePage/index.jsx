import React from 'react';
import CollectionContainer from '../../components/collectionContainer';
import data from "../../components/mockApi"
import Layout from "../../components/layout_for_SideBarAndHeader";

const HomePage = () => {
    return (
        <Layout>
            <div >
                <CollectionContainer
                    data={data}
                    page={'tours'}
                    length={''}>Коллекции туров</CollectionContainer>
            </div>
        </Layout>
    );
};

export default HomePage;