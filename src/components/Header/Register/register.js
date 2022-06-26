import React, { useContext, useState } from 'react';
import classes from './register.module.css';
import TextInput from '../../TextInput';
import { ModalContext } from '../../../context/ModalContext';
import Login from '../Login';
import userApi from '../../../api/userApi';
import { toast } from 'react-toastify';
import { UserContext } from '../../../context/UserContext';

function Register(props) {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [phone, setPhone] = useState('');
    const [isfetching, setIsFetching] = useState(false);
    const { setModal } = useContext(ModalContext);
    const handleOpenLogin = () => {
        setModal(<Login />);
    };
    const handleRegister = (e) => {
        e.preventDefault();
        setIsFetching(true);
        userApi
            .register({ username, password, email, displayName })
            .then((user) => {
                console.log(user);
                setIsFetching(false);
                setUser(user);
                setModal();
                toast.success('Đăng kí tài khoản thành công');
            })
            .catch((e) => {
                setIsFetching(false);
                toast.error('Đăng kí tài khoản không thành công');
                console.log(e);
            });
    };
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h2>Đăng kí tài khoản</h2>
                <div className={classes.form}>
                    <TextInput
                        label={'Tài khoản'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextInput
                        label={'Mật khẩu'}
                        type={'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextInput
                        label={'Email'}
                        type={'Email'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                        label={'Tên hiển thị'}
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                    <TextInput
                        label={'Số điện thoại'}
                        type={'number'}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button
                        onClick={handleRegister}
                        className={isfetching ? classes.loading : ''}
                    >
                        Đăng kí
                    </button>
                    <span className={classes.login}>
                        Đã có tài khoản?{' '}
                        <span
                            className={classes.loginButton}
                            onClick={handleOpenLogin}
                        >
                            Đăng nhập
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Register;
