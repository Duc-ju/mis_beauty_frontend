import React from 'react';
import classes from './myAccountTabs.module.css';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

function MyAccountTabs(props) {
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <div className={classes.root}>
            <ul className={`${classes.nav} ${classes['nav-tabs']}`}>
                <li
                    className={`${classes['nav-item']} ${
                        pathname === '/my-account' ? classes.active : ''
                    }`}
                >
                    <Link
                        className={`${classes['nav-link']} ${classes.scroll}`}
                        data-toggle="tab"
                        to={'/my-account'}
                    >
                        Thông tin cá nhân
                    </Link>
                </li>
                <li
                    className={`${classes['nav-item']} ${
                        pathname === '/my-account/services/booking'
                            ? classes.active
                            : ''
                    }`}
                >
                    <Link
                        className={`${classes['nav-link']} ${classes.scroll}`}
                        data-toggle="tab"
                        to={'/my-account/services/booking'}
                    >
                        Dịch vụ đã đặt trước
                    </Link>
                </li>
                <li
                    className={`${classes['nav-item']} ${
                        pathname === '/my-account/services'
                            ? classes.active
                            : ''
                    }`}
                >
                    <Link
                        className={`${classes['nav-link']} ${classes.scroll}`}
                        data-toggle="tab"
                        to={'/my-account/services'}
                    >
                        Dịch vụ đã sử dụng
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default MyAccountTabs;
