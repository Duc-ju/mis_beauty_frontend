import React, { useState } from 'react';

export const ModalContext = React.createContext(null);
const ModalProvider = ({ children }) => {
    const [modal, setModal] = useState(null);

    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
