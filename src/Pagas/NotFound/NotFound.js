import React from 'react';
import notFound from '../../Assets/image/notFound.webp';

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;