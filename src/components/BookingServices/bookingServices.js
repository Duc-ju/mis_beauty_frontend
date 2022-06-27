import React, { useContext, useMemo } from 'react';
import classes from './bookingServices.module.css';
import { UserContext } from '../../context/UserContext';
import useFirestore from '../../hooks/useFirestore';
import convertDateTime from '../../logic/convertDateTime';

function BookingServices(props) {
    const { user } = useContext(UserContext);
    const bookingCondition = useMemo(() => {
        return {
            fieldName: 'uid',
            operator: '==',
            compareValue: user.id
        };
    }, [user]);
    const bookingServices = useFirestore('booking', bookingCondition);
    if (!bookingServices || !bookingServices.length) return null;
    console.log(bookingServices);
    return (
        <section className={classes.root}>
            {bookingServices.map((bookingService) => (
                <div className={classes.service} key={bookingService.id}>
                    <ul className={classes.listInfo}>
                        <li className={classes.listItem}>
                            <span className={classes.label}>Ngày tạo lịch</span>
                            <span className={classes.value}>
                                {convertDateTime(
                                    bookingService.createAt.seconds
                                )}
                            </span>
                        </li>
                        <li className={classes.listItem}>
                            <span className={classes.label}>Ngày đặt lịch</span>
                            <span className={classes.value}>
                                {bookingService.checkInTime}
                            </span>
                        </li>
                        <li className={classes.listItem}>
                            <span className={classes.label}>Tên</span>
                            <span className={classes.value}>
                                {user.displayName}
                            </span>
                        </li>
                        <li className={classes.listItem}>
                            <span className={classes.label}>Số điện thoại</span>
                            <span className={classes.value}>{user.phone}</span>
                        </li>
                        <li className={classes.listItem}>
                            <span className={classes.label}>
                                Dịch vụ đăng kí
                            </span>
                            <span className={classes.value}>
                                {bookingService.services.map(
                                    (service, index) => (
                                        <span
                                            key={service.value}
                                            key={service.value}
                                        >
                                            {service.label}
                                            {index !==
                                            bookingService.services.length - 1
                                                ? ', '
                                                : ''}
                                        </span>
                                    )
                                )}
                            </span>
                        </li>
                    </ul>
                    <button className={classes.button}>Huỷ lịch đặt</button>
                </div>
            ))}
        </section>
    );
}

export default BookingServices;
