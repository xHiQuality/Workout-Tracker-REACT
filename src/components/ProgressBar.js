import './ProgressBar.css'
import React from 'react';

const ProgressBar = ({ percentage }) => {
    return (
        <div className='outerDiv'>
            <div className='innerDiv' style={{width: `${percentage}%`}}>
                <span className='text'>{`${percentage}%`}</span>
            </div>
        </div>
    );
}

export default ProgressBar;