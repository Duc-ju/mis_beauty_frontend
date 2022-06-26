import React, { useContext, useState } from 'react';
import classes from './login.module.css';
import TextInput from '../../TextInput';
import { ModalContext } from '../../../context/ModalContext';
import Register from '../Register';
import userApi from '../../../api/userApi';
import jwt_decode from 'jwt-decode';
import { UserContext } from '../../../context/UserContext';
import { toast } from 'react-toastify';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFetching, setIsFetching] = useState(false);
    const { setModal } = useContext(ModalContext);
    const { user, setUser } = useContext(UserContext);
    const handleOpenRegister = () => {
        setModal(<Register />);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFetching(true);
        userApi
            .login({ username, password })
            .then((token) => {
                if (!token.access) {
                    throw 'Tài khoản hoặc mật khẩu không chính xác';
                }
                const tokenInfo = jwt_decode(token.access);
                userApi
                    .getInfo(tokenInfo.user_id)
                    .then((user) => {
                        setIsFetching(false);
                        setModal();
                        setUser(user);
                        toast.success('Đăng nhập thành công');
                        console.log(user);
                    })
                    .catch((e) => {
                        throw e;
                    });
            })
            .catch((e) => {
                setIsFetching(false);
                toast.error('Tài khoản hoặc mật khẩu không chính xác');
                console.log(e);
            });
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h2>Đăng nhập</h2>
                <form className={classes.form} onSubmit={handleSubmit}>
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
                    <button
                        type={'submit'}
                        className={isFetching ? classes.loading : ''}
                    >
                        Đăng nhập
                    </button>
                    <span className={classes.register}>
                        Chưa có tài khoản?{' '}
                        <span
                            className={classes.registerButton}
                            onClick={handleOpenRegister}
                        >
                            Đăng kí ngay
                        </span>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Login;
