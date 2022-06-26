import React from 'react';
import classes from './bookingServices.module.css';

function BookingServices(props) {
    return (
        <section className={classes.root}>
            <div className={classes.service}>
                <ul className={classes.listInfo}>
                    <li className={classes.listItem}>
                        <span className={classes.label}>Ngày tạo lịch</span>
                        <span className={classes.value}>25/10/2020</span>
                    </li>
                    <li className={classes.listItem}>
                        <span className={classes.label}>Ngày đặt lịch</span>
                        <span className={classes.value}>25/10/2020</span>
                    </li>
                    <li className={classes.listItem}>
                        <span className={classes.label}>Tên</span>
                        <span className={classes.value}>Nguyễn Tràng Đức</span>
                    </li>
                    <li className={classes.listItem}>
                        <span className={classes.label}>Số điện thoại</span>
                        <span className={classes.value}>0963835711</span>
                    </li>
                    <li className={classes.listItem}>
                        <span className={classes.label}>Dịch vụ đăng kí</span>
                        <span className={classes.value}>Làm nail, làm tóc</span>
                    </li>
                </ul>
                <button className={classes.button}>Huỷ lịch đặt</button>
            </div>
            <div className={classes.service}>
                <ul className={classes.listInfo}>
                    <li className={classes.listItem}>
                        <span className={classes.label}>Ngày tạo lịch</span>
                        <span className={classes.value}>25/10/2020</span>
                    </li>
                    <li className={classes.listItem}>
                        <span className={classes.label}>Ngày đặt lịch</span>
                        <span className={classes.value}>25/10/2020</span>
                    </li>
                    <li className={classes.listItem}>
                        <span className={classes.label}>Tên</span>
                        <span className={classes.value}>Nguyễn Tràng Đức</span>
                    </li>
                    <li className={classes.listItem}>
                        <span className={classes.label}>Số điện thoại</span>
                        <span className={classes.value}>0963835711</span>
                    </li>
                    <li className={classes.listItem}>
                        <span className={classes.label}>Dịch vụ đăng kí</span>
                        <span className={classes.value}>Làm nail, làm tóc</span>
                    </li>
                </ul>
                <button className={classes.button}>Huỷ lịch đặt</button>
            </div>
        </section>
    );
}

export default BookingServices;
