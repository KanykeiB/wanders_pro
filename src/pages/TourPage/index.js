import React from 'react';
import {useParams} from "react-router-dom";

const TourPage = () => {
    const id = useParams().id

    return (
        <div>
            tour with {id} id
        </div>
    );
};

export default TourPage;