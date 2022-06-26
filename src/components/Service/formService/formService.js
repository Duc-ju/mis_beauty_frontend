import React from 'react';
import classes from './formService.module.css';
import Select from 'react-select';

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
    const handleSubmitForm = () => {};
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.form}>
                    <h2>Đặt lịch dịch vụ</h2>
                    <label htmlFor={'time'} className={classes.formGroup}>
                        <h3>Chọn ngày</h3>
                        <input type={'datetime-local'} />
                    </label>
                    <label htmlFor={'service'} className={classes.formGroup}>
                        <h3>Chọn dịch vụ</h3>
                        <Select
                            options={serviceOptions}
                            isMulti={true}
                            defaultValue={[
                                serviceOptions.find((i) => i.value === type)
                            ]}
                        />
                    </label>
                    <div className={classes.buttonGroup}>
                        <button onClick={handleSubmitForm}>Đăng kí</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormService;
