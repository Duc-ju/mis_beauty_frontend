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
                            className={`${classes['col-xl-7']} ${classes['col-lg-12']} ${classes['bg-nail']}`}
                        />
                        <div
                            className={`${classes['col-xl-5']} ${classes['col-lg-12']}`}
                        >
                            <div className={classes.heading}>
                                <h2>Chăm sóc móng tay</h2>
                                <span className={classes.line} />
                                <p>
                                    <span
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        Chào mừng bạn đến với Mis Beauty
                                    </span>
                                    <br />
                                    Không giống như làm nail tại nhà, bạn sẽ
                                    được chăm sóc móng một cách tận tình với
                                    những loại sơn chất lượng ở các cơ sở làm
                                    đẹp uy tín. Tại Mis Beauty, quy trình làm
                                    móng thông thường sẽ diễn ra trong 7 bước cơ
                                    bản là bạn đã có được một bộ móng xinh.
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
                            className={`${classes['col-xl-7']} ${classes['col-lg-12']} ${classes['bg-hair']}`}
                        />
                        <div
                            className={`${classes['col-xl-5']} ${classes['col-lg-12']}`}
                        >
                            <div className={classes.heading}>
                                <h2>Chăm sóc tóc</h2>
                                <span className={classes.line} />
                                <p>
                                    <span
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        Chào mừng bạn đến với Mis Beauty
                                    </span>
                                    <br />
                                    Muốn thay đổi phong cách, thử những kiểu tóc
                                    mới, Mis Beauty Salon sẽ là nơi bạn có thể
                                    gửi gắm niềm tin của mình. Trong suốt nhiều
                                    năm hoạt động, Mis Beauty Salon đã trở thành
                                    cái tên quen thuộc của nhiều khách hàng yêu
                                    thích phong cách nữ tính. Không chỉ được
                                    đánh giá cao về chất lượng tạo mẫu tóc, 1900
                                    Hair Salon còn nhận được nhiều lời khen bởi
                                    dịch vụ chăm sóc khách hàng chuyên nghiệp và
                                    nhiệt tình.
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
                            className={`${classes['col-xl-7']} ${classes['col-lg-12']} ${classes['bg-skin']}`}
                        />
                        <div
                            className={`${classes['col-xl-5']} ${classes['col-lg-12']}`}
                        >
                            <div className={classes.heading}>
                                <h2>Chăm sóc da</h2>
                                <span className={classes.line} />
                                <p>
                                    <span
                                        style={{ textTransform: 'uppercase' }}
                                    >
                                        Chào mừng bạn đến với Mis Beauty
                                    </span>
                                    <br />
                                    Liệu trình chăm sóc da chuyên sâu Perfect
                                    Skin bao gồm nhiều bước: Tẩy trang, soi da,
                                    massage; detox da; đào thải độc tố; đắp mặt
                                    nạ; massage dưỡng chất… Toàn bộ quá trình
                                    chăm sóc da sẽ giúp khách hàng thư giãn,
                                    thoải mái sau những ngày dài căng thẳng. Làn
                                    da sau khi trải nghiệm liệu trình sẽ nhận
                                    thấy được sự khác biệt rõ rệt.
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
