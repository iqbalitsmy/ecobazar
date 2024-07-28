import React, { createContext, useState } from 'react';

export const PageNavContext = createContext({});

const PageNavProvider = ({ children }) => {
    const [pageNav, setPageNav] = useState([]);
    const [newStyle, setNewStyle] = useState(false);

    // console.log(pageNav);

    return (
        <PageNavContext.Provider value={{ pageNav, setPageNav, newStyle, setNewStyle }}>
            {children}
        </PageNavContext.Provider>
    );
};

export default PageNavProvider;