import React from 'react';

const Snackbar = ({ snackbar }) => {

    const getBackgroundColor = () => {
        switch (snackbar.type) {
            case 'success':
                return 'bg-green-500';
            case 'warning':
                return 'bg-yellow-500';
            default:
                return 'bg-gray-800';
        }
    };

    return (
        <div
            className={`px-4 py-2 text-white rounded shadow-md transition-all duration-300 ease-in-out ${snackbar.isVisible ? 'opacity-100' : 'opacity-0'
                } ${getBackgroundColor()}`}
        >
            {snackbar.message}
        </div>
    );
};

export const MemoSnackbar = React.memo(Snackbar);
export default Snackbar;
