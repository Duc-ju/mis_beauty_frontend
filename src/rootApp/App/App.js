import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../../router/ScrollToTop';
import Home from '../../components/Home';
import Login from '../../components/Login';
import Service from '../../components/Service/service';
import MyAccount from '../MyAccount/myAccount';
import Advise from '../../components/Advise';
import Register from '../../components/Register';

function App() {
    return (
        <>
            <Suspense fallback={<>Loading</>}>
                <BrowserRouter>
                    <ScrollToTop>
                        <Routes>
                            <Route path="/*" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route
                                path="/service/:type"
                                element={<Service />}
                            />
                            <Route
                                path="/my-account/*"
                                element={<MyAccount />}
                            />
                            <Route path="/advise" element={<Advise />} />
                        </Routes>
                    </ScrollToTop>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default App;
