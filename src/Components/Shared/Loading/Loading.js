import React from 'react';
import spiner from '../../../images/loading.gif';

const Loading = () => {
    return (
        <div>
            <img className='h-20 mx-auto my-96' src={spiner} alt="" />
        </div>
    );
};

export default Loading;