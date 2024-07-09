import React from 'react';
import useTimeElapsed from '../../utils/useTimeElapsed';
import { Rating } from '@mui/material';

const Reviewers = ({ name, avatar, rating, time, review }) => {
    const elapsed = useTimeElapsed(time);
    return (
        <div className='mb-4'>
            <div className='flex items-center justify-between mb-1'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img
                            className="relative inline-block h-11 w-11 !rounded-full  object-cover object-center"
                            src={avatar}
                            alt="avatar"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <h3 className='font-medium text-sm'>{name}</h3>
                        <div>
                            <Rating name="read-only" size='small' value={rating} readOnly precision={0.5} />
                        </div>
                    </div>
                </div>
                <div className='text-gray-400 text-sm'>
                    <p>{elapsed}</p>
                </div>
            </div>
            <p className='text-gray-500 text-sm'>{review}</p>
        </div>
    );
};

export default Reviewers;