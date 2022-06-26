import React, { useContext } from 'react';
import classes from './advise.module.css';
import { ModalContext } from '../../context/ModalContext';
import Select from 'react-select';

function Advise(props) {
    const { setModal } = useContext(ModalContext);
    const handleSubmitForm = (e) => {
        e.preventDefault();
        setModal(
            <div className={classes.result}>
                <div className={classes.tableColor}></div>
                <h2>Bạn phù hợp nhất với màu nail: #L1, #L56, #L67</h2>
            </div>
        );
    };
    return (
        <section className={classes.root}>
            <div className={classes.container}>
                <form className={classes.form} onSubmit={handleSubmitForm}>
                    <h2>Tư vấn màu nail phù hợp với bạn</h2>
                    <span className={classes.centerLine} />
                    <label for={'tuoi'} className={classes.formGroup}>
                        <h3>1. Độ tuổi của bạn là</h3>
                        <Select
                            className={classes.reactSelect}
                            name={'tuoi'}
                            placeholder={'Chọn độ tuổi'}
                            options={[
                                {
                                    value: '11-14',
                                    label: '11-14'
                                },
                                {
                                    value: '15-17',
                                    label: '15-17'
                                },
                                {
                                    value: '18-22',
                                    label: '18-22'
                                },
                                {
                                    value: '23-30',
                                    label: '23-30'
                                },
                                {
                                    value: '>30',
                                    label: 'Trên 30'
                                }
                            ]}
                        />
                    </label>
                    <label
                        htmlFor={'nghe-nghiep'}
                        className={classes.formGroup}
                    >
                        <h3>2. Nghề nghiêp của bạn là</h3>
                        <Select
                            className={classes.reactSelect}
                            name={'nghe-nghiep'}
                            placeholder={'Chọn nghề nghiệp'}
                            options={[
                                {
                                    value: 'Văn phòng, công sở',
                                    label: 'Văn phòng, công sở'
                                },
                                {
                                    value: 'Công việc lao động tay chân',
                                    label: 'Công việc lao động tay chân'
                                },
                                {
                                    value: 'Giao tiếp xã hội',
                                    label: 'Giao tiếp xã hội'
                                },
                                {
                                    value: 'Học sinh / sinh viên',
                                    label: 'Học sinh / sinh viên'
                                },
                                {
                                    value: 'Công việc khác',
                                    label: 'Công việc khác'
                                }
                            ]}
                        />
                    </label>
                    <label
                        htmlFor={'yeu-cau-cong-viec'}
                        className={classes.formGroup}
                    >
                        <h3>
                            3. Công việc của bạn có yêu cầu gì về màu móng tay
                            không?
                        </h3>
                        <Select
                            className={classes.reactSelect}
                            name={'yeu-cau-cong-viec'}
                            placeholder={'Chọn yêu cầu công việc'}
                            options={[
                                {
                                    value: 'Không được quá nổi bật',
                                    label: 'Không được quá nổi bật'
                                },
                                {
                                    value: 'Không có quy định',
                                    label: 'Không có quy định'
                                }
                            ]}
                        />
                    </label>
                    <label htmlFor={'so-thich'} className={classes.formGroup}>
                        <h3>4. Sở thích về màu móng của bạn là</h3>
                        <Select
                            className={classes.reactSelect}
                            name={'so-thich'}
                            placeholder={'Chọn sở thích'}
                            options={[
                                {
                                    value: 'Màu nhẹ nhàng',
                                    label: 'Màu nhẹ nhàng'
                                },
                                {
                                    value: 'Màu nổi bật',
                                    label: 'Màu nổi bật'
                                }
                            ]}
                        />
                    </label>
                    <label
                        htmlFor={'mau-hien-tai'}
                        className={classes.formGroup}
                    >
                        <h3>5. Màu móng hiện tại của bạn là</h3>
                        <Select
                            className={classes.reactSelect}
                            name={'mau-hien-tai'}
                            placeholder={'Chọn màu móng hiện tại'}
                            options={[
                                {
                                    value: 'Chưa làm móng bao giờ',
                                    label: 'Chưa làm móng bao giờ'
                                },
                                {
                                    value: 'Màu nhẹ nhàng',
                                    label: 'Màu nhẹ nhàng'
                                },
                                {
                                    value: 'Màu nổi bật',
                                    label: 'Màu nổi bật'
                                }
                            ]}
                        />
                    </label>
                    <label htmlFor={'pha-cach'} className={classes.formGroup}>
                        <h3>
                            6. Bạn muốn phá cách trong lần làm móng tới không?
                        </h3>
                        <Select
                            className={classes.reactSelect}
                            name={'pha-cach'}
                            placeholder={'Chọn mong muốn'}
                            options={[
                                {
                                    value: 'Tôi không muốn',
                                    label: 'Tôi không muốn'
                                },
                                {
                                    value: 'Màu nhẹ nhàng',
                                    label: 'Màu nhẹ nhàng'
                                },
                                {
                                    value: 'Tất nhiên rồi',
                                    label: 'Tất nhiên rồi'
                                }
                            ]}
                        />
                    </label>
                    <label
                        htmlFor={'tinh-trang-quan-he'}
                        className={classes.formGroup}
                    >
                        <h3>7. Bạn có người yêu / chồng chưa?</h3>
                        <Select
                            className={classes.reactSelect}
                            name={'tinh-trang-quan-he'}
                            placeholder={'Chọn tình trạng quan hệ'}
                            options={[
                                {
                                    value: 'Có rùi',
                                    label: 'Đã có'
                                },
                                {
                                    value: 'chưa có',
                                    label: 'chưa có'
                                }
                            ]}
                        />
                    </label>
                    <span className={classes.line} />
                    <div className={classes.buttonGroup}>
                        <button type={'submit'}>Xem kết quả tư vấn</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Advise;
