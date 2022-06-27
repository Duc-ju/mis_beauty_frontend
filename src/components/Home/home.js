import React from 'react';
import classes from './home.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function Home(props) {
    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const settings2 = {
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false
    };
    return (
        <section className={classes.root}>
            <div className={classes.slider}>
                <Slider {...settings1}>
                    <div className={classes.sliderItem}>
                        <img
                            src={
                                'https://timchohoc.com/wp-content/uploads/2021/03/Article-Cover_3_2_-_1440x1080-3-1.jpg'
                            }
                        />
                    </div>
                    <div className={classes.sliderItem}>
                        <img
                            src={
                                'https://toplist.vn/images/800px/hanie-beauty-nail-amp-eyelash-699506.jpg'
                            }
                        />
                    </div>
                </Slider>
            </div>
            <div className={`${classes.section} ${classes['bg-1']}`}>
                <div className={classes.container}>
                    <div className={classes.row}>
                        <div className={classes.heading}>
                            <h2>Spa Trị Liệu Việt</h2>
                            <p>
                                AN’s Spa là một Spa trị liệu Việt với sự đồng
                                hành của chủ tịch sáng lập mô hình Spa Việt –
                                Lương y Phan Cao Bình. TạiAN’s Spa khách hàng sẽ
                                được trải nghiệm các dịch vụ chăm sóc sức khoẻ
                                hàng đầu, đồng thời mang lại sự thư giãn thực sự
                                cho khách hàng với những bài massage ấn huyệt
                                ứng dụng khí công và y học cổ truyền do chuyên
                                gia có trên 25 năm kinh nghiệm trực tiếp hướng
                                dẫn.
                            </p>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div
                            className={`${classes.item} ${classes['item-1']} ${classes['col-xl-4']} ${classes['col-lg-4']}`}
                        >
                            <a href="https://an-spa.vn/dich-vu/spa-menu/1">
                                <img
                                    src="https://an-spa.vn/images/services/uu-dai-dac-biet-1624263594.png"
                                    alt="SPA MENU"
                                />
                                <h3>SPA MENU</h3>
                            </a>
                        </div>
                        <div
                            className={`${classes.item} ${classes['item-2']} ${classes['col-xl-4']} ${classes['col-lg-4']}`}
                        >
                            <a href="https://an-spa.vn/dich-vu/cham-soc-da-mat/2">
                                <h3>Chăm sóc da mặt</h3>
                                <img
                                    src="https://an-spa.vn/images/services/cham-soc-da-mat-1652960024.jpg"
                                    alt="Chăm sóc da mặt"
                                />
                            </a>
                        </div>
                        <div
                            className={`${classes.item} ${classes['item-1']} ${classes['col-xl-4']} ${classes['col-lg-4']}`}
                        >
                            <a href="https://an-spa.vn/dich-vu/cac-dich-vu-massage/3">
                                <img
                                    src="https://an-spa.vn/images/services/massage-tri-lieu-1651734186.jpg"
                                    alt="CÁC DỊCH VỤ MASSAGE"
                                />
                                <h3>CÁC DỊCH VỤ MASSAGE</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes.section} ${classes['bg-2']}`}>
                <div className={classes.container}>
                    <div className={classes.row}>
                        <div
                            className={`${classes['col-xl-7']} ${classes['col-lg-12']} ${classes.bg}`}
                        />
                        <div
                            className={`${classes['col-xl-5']} ${classes['col-lg-12']}`}
                        >
                            <div className={classes.heading}>
                                <h2>Trải nghiệm dịch vụ</h2>
                                <span className={classes.line} />
                                <p>
                                    <span
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        Chào mừng bạn đến với Mis Beauty
                                    </span>
                                    <br />
                                    Với các bài massage ứng dụng khí công và day
                                    ấn huyệt, đặc biệt là massage đầu có 1 không
                                    2 tại Việt Nam, được nghiên cứu bởi chuyên
                                    gia trên 25 năm kinh nghiệm trong ngành,
                                    An’s Spa sẽ đáp ứng đa dạng nhu cầu của bạn
                                    từ thư giãn đến điều trị bệnh lý. Đội ngũ
                                    của Mis Beauty luôn tận tâm, hết lòng vì sự
                                    hài lòng, sức khoẻ và sắc đẹp của khách
                                    hàng.
                                </p>
                                <Link className={classes.button} to="/service">
                                    Đặt lịch ngay
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${classes.section} ${classes['bg-4']}`}>
                <div className={classes.container}>
                    <div className={classes.row}>
                        <div className={classes.heading}>
                            <h2>Hình ảnh về Mis Beauty</h2>
                        </div>
                    </div>
                </div>

                <Slider {...settings2} className={classes.slider2}>
                    <div className={classes.slider2Item}>
                        <div>
                            <a href="javascript:;">
                                <img
                                    src="https://an-spa.vn/timthumb.php?src=/images/media/album-1651115391.jpg&w=440&h=317&q=72"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className={classes.slider2Item}>
                        <div>
                            <a href="javascript:;">
                                <img
                                    src="https://an-spa.vn/timthumb.php?src=/images/media/album-1651734014.png&w=440&h=317&q=72"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className={classes.slider2Item}>
                        <div>
                            <a href="javascript:;">
                                <img
                                    src="https://an-spa.vn/timthumb.php?src=/images/media/album-1651734076.png&w=440&h=317&q=72"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className={classes.slider2Item}>
                        <div>
                            <a href="javascript:;">
                                <img
                                    src="https://an-spa.vn/timthumb.php?src=/images/media/album-1651115391.jpg&w=440&h=317&q=72"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className={classes.slider2Item}>
                        <div>
                            <a href="javascript:;">
                                <img
                                    src="https://an-spa.vn/timthumb.php?src=/images/media/album-1651734014.png&w=440&h=317&q=72"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className={classes.slider2Item}>
                        <div>
                            <a href="javascript:;">
                                <img
                                    src="https://an-spa.vn/timthumb.php?src=/images/media/album-1651734076.png&w=440&h=317&q=72"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className={classes.slider2Item}>
                        <div>
                            <a href="javascript:;">
                                <img
                                    src="https://an-spa.vn/timthumb.php?src=/images/media/album-1651115391.jpg&w=440&h=317&q=72"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className={classes.slider2Item}>
                        <div>
                            <a href="javascript:;">
                                <img
                                    src="https://an-spa.vn/timthumb.php?src=/images/media/album-1651734014.png&w=440&h=317&q=72"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                    <div className={classes.slider2Item}>
                        <div>
                            <a href="javascript:;">
                                <img
                                    src="https://an-spa.vn/timthumb.php?src=/images/media/album-1651734076.png&w=440&h=317&q=72"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default Home;
