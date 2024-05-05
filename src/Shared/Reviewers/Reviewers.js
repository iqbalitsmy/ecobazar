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
                            src={avatar}
                            alt="avatar"
                            class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
                        />
                    </div>
                    <div>
                        <h3 className='font-semibold'>{name}</h3>
                        <div>
                            <Rating name="read-only" size='small' value={rating} readOnly precision={0.5} />
                        </div>
                    </div>
                </div>
                <div className='text-gray-400'>
                    <p>{elapsed}</p>
                </div>
            </div>
            <p className='text-gray-500'>{review}</p>
        </div>
    );
};

export default Reviewers;