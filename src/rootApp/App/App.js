import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../../router/ScrollToTop';
import Home from '../../components/Home';
import Service from '../../components/Service/service';
import MyAccount from '../MyAccount/myAccount';
import Advise from '../../components/Advise';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import ModalProvider from '../../context/ModalContext';
import UserProvider from '../../context/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    useEffect(() => {
        document.title = 'Hệ thống chăm sóc sắc đẹp';
    }, []);
    return (
        <>
            <Suspense fallback={<>Loading</>}>
                <BrowserRouter>
                    <UserProvider>
                        <ModalProvider>
                            <ScrollToTop>
                                <Header />
                                <Routes>
                                    <Route path="/*" element={<Home />} />
                                    <Route
                                        path="/service"
                                        element={<Service />}
                                    />
                                    <Route
                                        path="/my-account/*"
                                        element={<MyAccount />}
                                    />
                                    <Route
                                        path="/advise/:type"
                                        element={<Advise />}
                                    />
                                </Routes>
                                <Footer />
                                <Modal />
                                <ToastContainer />
                            </ScrollToTop>
                        </ModalProvider>
                    </UserProvider>
                </BrowserRouter>
            </Suspense>
        </>
    );
}

export default App;
