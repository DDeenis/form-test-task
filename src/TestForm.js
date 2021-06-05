import React from 'react';
import { useForm } from 'react-hook-form';

export default function TestForm() {
    const formData = useForm();

    const passwordsMatch = () => formData.watch('password') === formData.watch('passwordRepeat');
    const passwordSettings = {
        required: 'Field is required',
        minLength: {
            value: 8,
            message: 'Min length of password is 8'
        },
        maxLength: {
            value: 20,
            message: 'Max length of password is 20'
        },
        pattern: {
            value: /(?=.*[a-z]*[A-Z]*[0-9])/,
            message: 'Password is weak'
        },
        validate: passwordsMatch
    };

    return (
        <form onSubmit={formData.handleSubmit(data => console.log(data))} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <label htmlFor='password'>Password</label>
            <input id='password' {...formData.register('password', passwordSettings)} />
            <span>{formData.formState.errors.password?.message}</span>

            <label htmlFor='password-repeat'>Repeat password</label>
            <input id='password-repeat' {...formData.register('passwordRepeat', passwordSettings)} />
            <span>{formData.formState.errors.passwordRepeat?.message}</span>

            { formData.watch('password') !== formData.watch('passwordRepeat') && <span>Passwords should match</span> }
            <button type='submit'>Submit</button>
        </form>
    );
}