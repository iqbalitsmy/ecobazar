import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, PAGE_RANGE }) => {
    const pages = [];

    // Generate page numbers based on total pages
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <nav className="flex justify-center">
            <ul className="flex items-center gap-2 list-none">
                {/* Render "Previous" button */}
                <li className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <button
                        className="block py-2 px-3 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>
                </li>

                {/* Render page numbers */}
                {pages.map((page, index) => {
                    if (page === currentPage || 
                        page === 1 || 
                        page === totalPages || 
                        (index >= currentPage - PAGE_RANGE && index <= currentPage + PAGE_RANGE)
                        ) {
                            return (
                                <li key={page}>
                                    <button
                                        className={`block py-1 px-3 rounded-full ${currentPage === page ? 'bg-[#00B207] text-white' : 'bg-white hover:bg-gray-100'} focus:outline-none`}
                                        onClick={() => onPageChange(page)}
                                    >
                                        {page}
                                    </button>
                                </li>
                            );
                        } else if (
                            (page === 2 && currentPage > PAGE_RANGE + 2) || 
                            (page === totalPages - 1 && currentPage < totalPages - PAGE_RANGE - 1)
                        ) {
                            return <li key={page}>...</li>;
                        }
                        return null;
                })}

                {/* Render "Next" button */}
                <li className={`prev-next-btn cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <button
                        className="block py-2 px-3 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
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
