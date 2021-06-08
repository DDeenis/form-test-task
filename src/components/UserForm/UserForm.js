import classNames from 'classnames';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../InputField/InputField';
import s from './UserForm.module.scss';

export default function UserForm({ defaultCity, cities }) {
    const { register, handleSubmit, formState, watch } = useForm();

    const passwordSettings = {
        required: 'Укажите пароль',
        minLength: {
            value: 5,
            message: 'Минимальная длина пароля 5 символов'
        },
        maxLength: {
            value: 20,
            message: 'Максимальная длина пароля 20 символов'
        },
        pattern: {
            value: /(?=.*[a-z]*[A-Z]*[0-9])/,
            message: 'Пароль слабый'
        },
        validate: {
            passwordsMatch: () => watch('password') === watch('passwordRepeat') || 'Пароли должны совпадать',
        }
    };
    const selectSettings = { required: 'Field is required', value: defaultCity.city };
    const isError = (fieldName) => !!formState.errors[fieldName];
    const inputClassNames = (fieldName) => isError(fieldName) ? classNames(s.formInput, s.formInputError) : s.formInput;

    return (
        <form onSubmit={handleSubmit(formData => console.log(formData))}>
            <InputField title='Город'>
                <select className={s.formInput} {...register('citySelect', selectSettings)}>{cities}</select>
            </InputField>
            <hr />
            <InputField title='Пароль' error={formState.errors.password?.message} hint='Ваш новый пароль должен содержать не менее 5 символов.'>
                <input type='text' className={inputClassNames('password')} {...register('password', passwordSettings)} />
            </InputField>
            <InputField title='Пароль еще раз' error={formState.errors.passwordRepeat?.message} hint='Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки.'>
                <input type='text' className={inputClassNames('passwordRepeat')} {...register('passwordRepeat', passwordSettings)} />
            </InputField>
            <hr />
            <button type='submit'>Изменить</button>
        </form>
    );
}