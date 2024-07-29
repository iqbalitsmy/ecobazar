import { CircularProgress } from '@mui/material';
import React from 'react';

const Spinner = ({ color = "success" }) => {
    return (
        <div className='grid place-content-center items-center mx-auto min-w-full min-h-[60vh]'>
            <div>
                <CircularProgress color={color} />
            </div>
        </div>
    );
};

export default Spinner;