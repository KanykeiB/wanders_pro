import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ToursPage = () => {
    const { category } = useParams()
    return (
        <div>
            hi, I am ToursPage
            <p>test: {category}</p>
        </div>
    );
};

export default ToursPage;