import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <section className={classes.root}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <img
                        alt={'logo-image'}
                        src={
                            'https://trangbeautysalon.vn/wp-content/uploads/2020/01/logo-trang.svg'
                        }
                    />
                </div>
                <ul className={classes.navList}>
                    <li className={classes.navItem}>
                        <Link to={'#'}>Khoá Học – Đào Tạo</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link to={'#'}>Dịch Vụ</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link to={'#'}>Blog</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link to={'#'}>Clip Hướng Dẫn Nail – Nối mi</Link>
                    </li>
                    <li className={classes.navItem}>
                        <Link to={'#'}>Liên Hệ</Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Header;
