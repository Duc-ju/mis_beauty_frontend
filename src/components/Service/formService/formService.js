import React, { useContext, useState } from 'react';
import classes from './formService.module.css';
import Select from 'react-select';
import { addDocument } from '../../../firebase/services';
import { UserContext } from '../../../context/UserContext';
import { toast } from 'react-toastify';
import { ModalContext } from '../../../context/ModalContext';

const serviceOptions = [
    {
        value: 'nail',
        label: 'Chăm sóc móng'
    },
    {
        value: 'hair',
        label: 'Chăm sóc tóc'
    },
    {
        value: 'skin',
        label: 'Chăm sóc da'
    }
];

function FormService(props) {
    const { type } = props;
    const { user } = useContext(UserContext);
    const { setModal } = useContext(ModalContext);
    const [dateTime, setDateTime] = useState('');
    const [services, setServices] = useState([
        serviceOptions.find((i) => i.value === type)
    ]);
    const [isFetching, setIsFetching] = useState(false);
    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (services.length === 0) {
            toast.error('Bạn chưa chọn dịch vụ nào cả');
            return;
        }
        setIsFetching(true);
        addDocument('booking', {
            checkInTime: dateTime,
            services,
            uid: user.id,
            isCancel: false,
            isCheckedIn: false
        })
            .then((booking) => {
                setIsFetching(false);
                console.log(booking);
                setModal();
                toast.success('Bạn đã đặt lịch thành công');
            })
            .catch((e) => {
                setIsFetching(false);
                toast.success('Đặt lịch thất bại');
                console.log(e);
            });
    };
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <form className={classes.form} onSubmit={handleSubmitForm}>
                    <h2>Đặt lịch dịch vụ</h2>
                    <label htmlFor={'time'} className={classes.formGroup}>
                        <h3>Chọn ngày</h3>
                        <input
                            required={true}
                            type={'datetime-local'}
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                        />
                    </label>
                    <label htmlFor={'service'} className={classes.formGroup}>
                        <h3>Chọn dịch vụ</h3>
                        <Select
                            options={serviceOptions}
                            isMulti={true}
                            placeholder={'Chọn dịch vụ'}
                            defaultValue={[
                                serviceOptions.find((i) => i.value === type)
                            ]}
                            onChange={(values) => setServices(values)}
                        />
                    </label>
                    <div className={classes.buttonGroup}>
                        <button className={isFetching ? classes.loading : ''}>
                            Đăng kí
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormService;
