import React, { useContext } from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';
import { ModalContext } from '../../context/ModalContext';
import Login from './Login';
import Register from './Register';
import { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';

function Header(props) {
    const { setModal } = useContext(ModalContext);
    const { user, setUser } = useContext(UserContext);
    const { pathname } = useLocation();

    const handleLogin = () => {
        setModal(<Login />);
    };
    const handleRegister = () => {
        setModal(<Register />);
    };
    const handleLogout = () => {
        setUser();
        toast.success('Đã đăng xuất');
        window.localStorage.removeItem('user');
    };
    return (
        <section className={classes.root}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    <Link to={'/'}>
                        <img
                            alt={'logo-image'}
                            src={
                                'https://trangbeautysalon.vn/wp-content/uploads/2020/01/logo-trang.svg'
                            }
                        />
                    </Link>
                </div>
                <ul className={classes.navList}>
                    {!!user && (
                        <li
                            className={`${classes.navItem} ${classes.displayName}`}
                        >
                            <span>{user.displayName}</span>
                        </li>
                    )}
                    <li
                        className={`${classes.navItem} ${
                            pathname === '/advise/nail' ? classes.active : ''
                        }`}
                    >
                        <Link to={'/advise/nail'}>Tư vấn màu nail</Link>
                    </li>
                    <li
                        className={`${classes.navItem} ${
                            pathname === '/service' ? classes.active : ''
                        }`}
                    >
                        <Link to={'/service'}>Đặt lịch</Link>
                    </li>
                    {!!user && (
                        <>
                            <li
                                className={`${classes.navItem} ${
                                    pathname.includes('/my-account')
                                        ? classes.active
                                        : ''
                                }`}
                            >
                                <Link to={'/my-account/services'}>
                                    Quản lý cá nhân
                                </Link>
                            </li>
                            <li className={classes.navItem}>
                                <span onClick={handleLogout}>Đăng xuất</span>
                            </li>
                        </>
                    )}
                    {!user && (
                        <>
                            <li className={classes.navItem}>
                                <span onClick={handleLogin}>Đăng nhập</span>
                            </li>
                            <li className={classes.navItem}>
                                <span onClick={handleRegister}>Đăng kí</span>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </section>
    );
}

export default Header;
