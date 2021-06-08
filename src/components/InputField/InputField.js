import React from 'react';
import s from './InputField.module.scss';

export default function InputField({ title, children, hint, error }) {
    return (
        <div className={s.inputWrapper}>
            <div className={s.inputBlock}>
                <label className={s.inputTitleText}>{title}</label>
                <div className={s.inputChildrenWrapper}>
                    {children}
                    {error && <span className={s.errorMessage}>{error}</span>}
                </div>
                {
                    hint &&
                    <div className={s.inputHintWrapper}>
                        <span className={s.inputHint}>{hint}</span>
                    </div>
                }
            </div>
        </div>
    );
}

InputField.defaultProps = {
    title: 'Text',
    hint: '',
    error: ''
}