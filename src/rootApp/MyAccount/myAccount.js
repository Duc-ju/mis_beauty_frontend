import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyServices from '../../components/MyServices';
import MyService from '../../components/MyService';
import Info from '../../components/Info';

function MyAccount() {
    return (
        <>
            <Routes>
                <Route path="/services/:type/:id" element={<MyService />} />
                <Route path="/services" element={<MyServices />} />
                <Route path="/info" element={<Info />} />
            </Routes>
        </>
    );
}

export default MyAccount;
