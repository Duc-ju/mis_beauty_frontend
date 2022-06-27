import React from 'react';
import classes from './footer.module.css';
import logoReverse from '../../static/logo-reverse.png';

function Footer(props) {
    return (
        <section>
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.row}>
                        <div
                            className={`${classes['col-xl-3']} ${classes.item} ${classes['col-lg-6']}`}
                        >
                            <a className={classes.logo_footer} href="/">
                                <img src={logoReverse} alt="" />
                            </a>
                            <p>
                                Dịch vụ làm nail. làm tóc và chăm sóc da chuyên
                                sâu.
                            </p>
                            <p>
                                Mis Beauty, số 56, Tả Thanh Oai, Thanh Trì, Hà
                                Nội
                            </p>
                            <p>
                                - Mis Beauty Premium: số 56, Tả Thanh Oai, Thanh
                                Trì, Hà Nội
                            </p>
                        </div>
                        <div
                            className={`${classes['col-xl-3']} ${classes.item} ${classes['col-lg-6']}`}
                        >
                            <h3>Liên hệ</h3>
                            <div className={classes.content}>
                                <span>Phone</span>
                                <a href="tel:0938561377">0938 561 377</a>
                            </div>
                            <div className={classes.content}>
                                <span>Email</span>
                                <a href="mailto:ansspatrilieu@gmail.com">
                                    ansspatrilieu@gmail.com
                                </a>
                            </div>
                            <div className={classes.content}>
                                <span>Social</span>
                                <div className={classes.content2}>
                                    <a href="https://www.facebook.com/ansspavn">
                                        <div
                                            className={`${classes['icon-facebook']} ${classes.icon}`}
                                        />
                                        <span>Facebook</span>
                                    </a>
                                    <a href="https://bit.ly/youtubeansspa">
                                        <div
                                            className={`${classes['icon-youtube']} ${classes.icon}`}
                                        />
                                        <span>Youtube</span>
                                    </a>
                                    <a href="https://www.instagram.com/ansspavn/">
                                        <div
                                            className={`${classes['icon-instagram']} ${classes.icon}`}
                                        />
                                        <span>Instagram</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${classes['col-xl-3']} ${classes.item} ${classes['col-lg-6']}`}
                        >
                            <h3>Thời gian mở cửa</h3>
                            <div className={classes.content}>
                                <p>
                                    Mỗi ngày từ{' '}
                                    <span
                                        style={{
                                            color: '#38C2DC',
                                            display: 'inline-block'
                                        }}
                                    >
                                        10h00 – 22h00{' '}
                                    </span>
                                    <br />
                                    Kể cả ngày lễ và Tết
                                </p>
                            </div>
                        </div>
                        <div
                            className={`${classes['col-xl-3']} ${classes.item} ${classes['col-lg-6']}`}
                        >
                            <h3>Danh mục</h3>
                            <ul>
                                <li>
                                    <a href="https://an-spa.vn/about-us">
                                        Giới thiệu
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://an-spa.vn/massage-course"
                                        className="head"
                                    >
                                        Khóa học massage
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://an-spa.vn/services"
                                        className="head"
                                    >
                                        Dịch vụ trị liệu
                                    </a>
                                </li>
                                <li>
                                    <a href="https://an-spa.vn/news">Tin tức</a>
                                </li>
                                <li>
                                    <a href="https://an-spa.vn/contact-us">
                                        Liên hệ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.copyright}>
                <div className={classes.container}>
                    <div className={classes.row}>
                        <div className={classes['col-lg-6']}>
                            <p>@ 2020 Mis Beauty All Right Reserved</p>
                        </div>
                        <div className={classes['col-lg-6']}>
                            <img
                                src="https://an-spa.vn/frontend/img/imgf1.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
