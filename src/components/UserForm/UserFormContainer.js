import React, { useMemo } from 'react';
import UserForm from './UserForm';
import citiesRaw from '../../assets/cities.json';
import { useForm } from 'react-hook-form';

export default function UserFormContainer() {
    const biggestCity = useMemo(() => citiesRaw.sort((c, n) => n.population - c.population)[0], [citiesRaw]);
    const cities = useMemo(
        () => citiesRaw
            .filter(c => c.population > 50000)
            .sort((c, n) => (n.city > c.city) ? -1 : 1)
            .map(c => <option key={c.city}>{c.city}</option>)
        , [citiesRaw]
    );

    const form = useForm();

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
            passwordsMatch: () => form.watch('password') === form.watch('passwordRepeat') || 'Пароли должны совпадать',
        }
    };
    const emailSettings = {
        required: 'Укажите почту',
        minLength: {
            value: 3,
            message: 'Минимальная длина почты 3 символа'
        },
        maxLength: {
            value: 30,
            message: 'Максимальная длина почты 30 символов'
        },
        pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Неверный E-mail'
        }
    };
    const selectSettings = { required: 'Field is required', value: biggestCity.city };

    const formSettings = {
        passwordSettings,
        emailSettings,
        selectSettings
    };

    return (
        <UserForm
            formSettings={formSettings}
            cities={cities}
            form={form}
        />
    );
}