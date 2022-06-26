import React, { useContext, useState } from 'react';
import classes from './advise.module.css';
import { ModalContext } from '../../context/ModalContext';
import Select from 'react-select';
import { toast } from 'react-toastify';
import adviseApi from '../../api/adviseApi';

function Advise(props) {
    const { setModal } = useContext(ModalContext);
    const [formValue, setFormvalue] = useState({
        age: '',
        job: '',
        constraint: '',
        hobby: '',
        current: '',
        different: '',
        relationship: ''
    });
    const [res, setRes] = useState(null);
    const [fetching, setFetching] = useState(false);
    const handleSubmitForm = (e) => {
        e.preventDefault();
        for (const key in formValue) {
            if (!formValue[key]) {
                toast.error('Chưa đầy đủ thông tin');
                return;
            }
        }
        const {
            age,
            job,
            constraint,
            hobby,
            current,
            different,
            relationship
        } = formValue;
        const array = [
            age,
            job,
            constraint,
            hobby,
            current,
            different,
            relationship
        ];
        setFetching(true);
        adviseApi
            .getAdvise({ array })
            .then((res) => {
                console.log(res);
                if (!res || !res.result) throw 'Có lỗi xảy ra';
                setFetching(false);
                setModal(
                    <div className={classes.result}>
                        <div className={classes.tableColor}></div>
                        <h2>
                            Bạn phù hợp nhất với màu nail:{' '}
                            {res.result.map((i, index) => (
                                <span key={i}>
                                    {i}
                                    {index !== res.result.length - 1
                                        ? ', '
                                        : ''}
                                </span>
                            ))}
                        </h2>
                    </div>
                );
            })
            .catch((e) => {
                setFetching(false);
                toast.error('Có lỗi xảy ra');
                console.log(e);
            });
    };

    return (
        <section className={classes.root}>
            <div className={classes.container}>
                <form className={classes.form} onSubmit={handleSubmitForm}>
                    <h2>Tư vấn màu nail phù hợp với bạn</h2>
                    <span className={classes.centerLine} />
                    <label for={'age'} className={classes.formGroup}>
                        <h3>1. Độ tuổi của bạn là</h3>
                        <Select
                            className={classes.reactSelect}
                            onChange={(option) =>
                                setFormvalue({
                                    ...formValue,
                                    age: option.value
                                })
                            }
                            name={'age'}
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
                                    value: 'Trên 30',
                                    label: 'Trên 30'
                                }
                            ]}
                        />
                    </label>
                    <label htmlFor={'job'} className={classes.formGroup}>
                        <h3>2. Nghề nghiêp của bạn là</h3>
                        <Select
                            className={classes.reactSelect}
                            onChange={(option) =>
                                setFormvalue({
                                    ...formValue,
                                    job: option.value
                                })
                            }
                            name={'job'}
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
                    <label htmlFor={'constraint'} className={classes.formGroup}>
                        <h3>
                            3. Công việc của bạn có yêu cầu gì về màu móng tay
                            không?
                        </h3>
                        <Select
                            className={classes.reactSelect}
                            onChange={(option) =>
                                setFormvalue({
                                    ...formValue,
                                    constraint: option.value
                                })
                            }
                            name={'constraint'}
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
                    <label htmlFor={'hobby'} className={classes.formGroup}>
                        <h3>4. Sở thích về màu móng của bạn là</h3>
                        <Select
                            className={classes.reactSelect}
                            onChange={(option) =>
                                setFormvalue({
                                    ...formValue,
                                    hobby: option.value
                                })
                            }
                            name={'hobby'}
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
                    <label htmlFor={'current'} className={classes.formGroup}>
                        <h3>5. Màu móng hiện tại của bạn là</h3>
                        <Select
                            className={classes.reactSelect}
                            onChange={(option) =>
                                setFormvalue({
                                    ...formValue,
                                    current: option.value
                                })
                            }
                            name={'current'}
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
                    <label htmlFor={'different'} className={classes.formGroup}>
                        <h3>
                            6. Bạn muốn phá cách trong lần làm móng tới không?
                        </h3>
                        <Select
                            className={classes.reactSelect}
                            onChange={(option) =>
                                setFormvalue({
                                    ...formValue,
                                    different: option.value
                                })
                            }
                            name={'different'}
                            placeholder={'Chọn mong muốn'}
                            options={[
                                {
                                    value: 'Tôi không muốn',
                                    label: 'Tôi không muốn'
                                },
                                {
                                    value: 'Tất nhiên rồi',
                                    label: 'Tất nhiên rồi'
                                }
                            ]}
                        />
                    </label>
                    <label
                        htmlFor={'relationship'}
                        className={classes.formGroup}
                    >
                        <h3>7. Bạn có người yêu / chồng chưa?</h3>
                        <Select
                            className={classes.reactSelect}
                            onChange={(option) =>
                                setFormvalue({
                                    ...formValue,
                                    relationship: option.value
                                })
                            }
                            name={'relationship'}
                            placeholder={'Chọn tình trạng quan hệ'}
                            options={[
                                {
                                    value: 'Có rùi',
                                    label: 'Đã có'
                                },
                                {
                                    value: 'Vẫn FA',
                                    label: 'chưa có'
                                }
                            ]}
                        />
                    </label>
                    <span className={classes.line} />
                    <div className={classes.buttonGroup}>
                        <button
                            type={'submit'}
                            className={fetching ? classes.loading : ''}
                        >
                            Xem kết quả tư vấn
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Advise;
