import React, { useContext, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BookingServices from '../../components/BookingServices';
import Info from '../../components/Info';
import classes from './myAccount.module.css';
import MyAccountTabs from '../../components/MyAccountTabs';
import MyServices from '../../components/MyServices';
import { UserContext } from '../../context/UserContext';

function MyAccount() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    }, [user]);
    if (!user) return null;

    return (
        <section className={classes.root}>
            <div className={classes.container}>
                <div className={classes.row}>
                    <div
                        className={`${classes['col-xl-4']} ${classes['bg_left']} ${classes['col-md-5']}`}
                    >
                        <MyAccountTabs />
                    </div>
                    <div
                        className={`${classes['col-xl-8']} ${classes['bg_right']} ${classes['col-md-7']}`}
                    >
                        <Routes>
                            <Route path="/services" element={<MyServices />} />
                            <Route
                                path="/services/booking"
                                element={<BookingServices />}
                            />
                            <Route path="/" element={<Info />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyAccount;
