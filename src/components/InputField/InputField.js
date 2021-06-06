import React from 'react';
import s from './InputField.module.scss';

export default function InputField({ title, component, hint, error }) {
    return (
        <div className={s.inputWrapper}>
            <div className={s.inputBlock}>
                <span>{title}</span>
                {component}
                {hint && <span className={s.inputHint}>{hint}</span>}
            </div>
            <div className={s.errorBlock}>
                {error && <span className={s.errorMessage}>{error}</span>}
            </div>
        </div>
    );
}

InputField.defaultProps = {
    title: 'Text',
    component: <input type='text' />,
    hint: '',
    error: ''
}