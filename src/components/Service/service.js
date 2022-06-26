import React, { useContext } from 'react';
import classes from './service.module.css';
import { ModalContext } from '../../context/ModalContext';
import FormService from './formService/formService';
import { UserContext } from '../../context/UserContext';
import Login from '../Header/Login';
import { toast } from 'react-toastify';

function Service(props) {
    const { setModal } = useContext(ModalContext);
    const { user } = useContext(UserContext);
    const handleBookService = (type) => {
        if (!!user) {
            setModal(<FormService type={type} />);
        } else {
            toast.warning('Bạn vui lòng đăng nhập trước khi đặt lịch');
            setModal(<Login />);
        }
    };
    return (
        <section className={classes.root}>
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
                                        Chào mừng bạn đến với An’s Spa
                                    </span>
                                    <br />
                                    Với các bài massage ứng dụng khí công và day
                                    ấn huyệt, đặc biệt là massage đầu có 1 không
                                    2 tại Việt Nam, được nghiên cứu bởi chuyên
                                    gia trên 25 năm kinh nghiệm trong ngành,
                                    An’s Spa sẽ đáp ứng đa dạng nhu cầu của bạn
                                    từ thư giãn đến điều trị bệnh lý. Đội ngũ
                                    của An’s Spa luôn tận tâm, hết lòng vì sự
                                    hài lòng, sức khoẻ và sắc đẹp của khách
                                    hàng.
                                </p>
                                <button
                                    className={classes.button}
                                    onClick={() => handleBookService('nail')}
                                >
                                    Đặt lịch ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${classes.section} ${classes['bg-2']} ${classes.reverse}`}
            >
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
                                        Chào mừng bạn đến với An’s Spa
                                    </span>
                                    <br />
                                    Với các bài massage ứng dụng khí công và day
                                    ấn huyệt, đặc biệt là massage đầu có 1 không
                                    2 tại Việt Nam, được nghiên cứu bởi chuyên
                                    gia trên 25 năm kinh nghiệm trong ngành,
                                    An’s Spa sẽ đáp ứng đa dạng nhu cầu của bạn
                                    từ thư giãn đến điều trị bệnh lý. Đội ngũ
                                    của An’s Spa luôn tận tâm, hết lòng vì sự
                                    hài lòng, sức khoẻ và sắc đẹp của khách
                                    hàng.
                                </p>
                                <button
                                    className={classes.button}
                                    onClick={() => handleBookService('hair')}
                                >
                                    Đặt lịch ngay
                                </button>
                            </div>
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
                                        Chào mừng bạn đến với An’s Spa
                                    </span>
                                    <br />
                                    Với các bài massage ứng dụng khí công và day
                                    ấn huyệt, đặc biệt là massage đầu có 1 không
                                    2 tại Việt Nam, được nghiên cứu bởi chuyên
                                    gia trên 25 năm kinh nghiệm trong ngành,
                                    An’s Spa sẽ đáp ứng đa dạng nhu cầu của bạn
                                    từ thư giãn đến điều trị bệnh lý. Đội ngũ
                                    của An’s Spa luôn tận tâm, hết lòng vì sự
                                    hài lòng, sức khoẻ và sắc đẹp của khách
                                    hàng.
                                </p>
                                <button
                                    className={classes.button}
                                    onClick={() => handleBookService('skin')}
                                >
                                    Đặt lịch ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
