import React, { useContext } from 'react';
import classes from './modal.module.css';
import { ModalContext } from '../../context/ModalContext';

function Modal(props) {
    const { modal, setModal } = useContext(ModalContext);
    if (!modal) return null;
    const handleClose = () => {
        setModal(null);
    };
    return (
        <aside className={classes.root}>
            <button
                className={classes.backgroundButton}
                onClick={handleClose}
            />
            <div className={classes.container}>
                <button onClick={handleClose} className={classes.closeButton}>
                    <span>&#10006;</span>
                </button>
                {modal}
            </div>
        </aside>
    );
}

export default Modal;
