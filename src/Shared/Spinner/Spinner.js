import { CircularProgress } from '@mui/material';
import React from 'react';

const Spinner = ({color = "success"}) => {
    return (
        <div className='grid place-content-center min-h-[60vh]'>
            <CircularProgress color= {color} />
        </div>
    );
};

export default Spinner;