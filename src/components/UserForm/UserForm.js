import classNames from 'classnames';
import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import s from './UserForm.module.scss';

export default function UserForm({ cities, formSettings, form }) {
    const { register, handleSubmit, formState } = form;
    const [lastChanged, setLastChanged] = useState(new Date().toLocaleString());

    const isError = (fieldName) => !!formState.errors[fieldName];
    const inputClassNames = (fieldName) => isError(fieldName) ? classNames(s.formInput, s.formInputError) : s.formInput;
    const onSubmit = formData => {
        console.log(formData);
        setLastChanged(new Date().toLocaleString());
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputField title='Город'>
                <select className={s.formInput} {...register('city', formSettings.selectSettings)}>{cities}</select>
            </InputField>
            <hr />
            <InputField title='Пароль' error={formState.errors.password?.message} hint='Ваш новый пароль должен содержать не менее 5 символов.'>
                <input type='text' className={inputClassNames('password')} {...register('password', formSettings.passwordSettings)} />
            </InputField>
            <InputField title='Пароль еще раз' error={formState.errors.passwordRepeat?.message} hint='Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.'>
                <input type='text' className={inputClassNames('passwordRepeat')} {...register('passwordRepeat', formSettings.passwordSettings)} />
            </InputField>
            <hr />
            <InputField title='Электронная почта' error={formState.errors.email?.message} hint='Можно изменить адрес, указанный при регистрации. '>
                <input type='text' className={inputClassNames('email')} {...register('email', formSettings.emailSettings)} />
            </InputField>
            <InputField title='Я согласен'>
                <div className={s.emailSubscribitionWrapper}>
                    <input type='checkbox' {...register('isSubscribed')} />
                    <span className={s.emailSubscribitionText}>принимать актуальную информацию на емейл</span>
                </div>
            </InputField>
            <InputField hint={`последние изменения ${lastChanged}`}>
                <button className={s.submitButton} type='submit'>Изменить</button>
            </InputField>
        </form>
    );
}