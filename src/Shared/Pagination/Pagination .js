import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];

    // Generate page numbers based on total pages
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <nav className="flex justify-center">
            <ul className="flex list-none">
                {/* Render "Previous" button */}
                <li className={`prev-next-btn cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <button
                        className="block py-1 px-4 bg-white hover:bg-gray-100 focus:outline-none"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>
                </li>

                {/* Render page numbers */}
                {pages.map((page) => (
                    <li key={page}>
                        <button
                            className={`block py-1 px-2 ${currentPage === page ? 'text-[#3bac97]' : 'bg-white'} hover:bg-gray-100 focus:outline-none`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                {/* Render "Next" button */}
                <li className={`prev-next-btn cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <button
                        className="block py-1 px-4 bg-white hover:bg-gray-100 focus:outline-none"
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        &gt;
                    </button>
                </li>
            </ul>
        </nav>
    );
};


export default Pagination;
