import React from 'react';
import classes from './myAccountTabs.module.css';

function MyAccountTabs(props) {
    return (
        <div className={classes.root}>
            <ul className={`${classes.nav} ${classes['nav-tabs']}`}>
                <li className={classes['nav-item']}>
                    <span
                        className={`${classes['nav-link']} ${classes.scroll}`}
                        data-toggle="tab"
                    >
                        Thông tin cá nhân
                    </span>
                </li>
                <li className={classes['nav-item']}>
                    <span
                        className={`${classes['nav-link']} ${classes.scroll}`}
                        data-toggle="tab"
                    >
                        Dịch vụ đã đặt trước
                    </span>
                </li>
                <li className={classes['nav-item']}>
                    <span
                        className={`${classes['nav-link']} ${classes.scroll} ${classes.active}`}
                        data-toggle="tab"
                    >
                        Dịch vụ đã sử dụng
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default MyAccountTabs;
