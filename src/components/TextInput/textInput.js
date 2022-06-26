import React from 'react';
import classes from './textInput.module.css';

function TextInput(props) {
    const { label, hepperText, icon, ...rest } = props;
    return (
        <div className={classes['omrs-input-group']}>
            <label className={classes['omrs-input-underlined']}>
                <input {...rest} required={true} />
                <span className={classes['omrs-input-label']}>{label}</span>
                <span className={classes['omrs-input-helper']}>
                    {hepperText}
                </span>
                {icon}
            </label>
        </div>
    );
}

export default TextInput;
