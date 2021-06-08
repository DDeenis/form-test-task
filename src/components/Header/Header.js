import React from 'react';
import s from './Header.module.scss';

export default function Header() {
    return (
        <header className={s.headerWrapper}>
            <div className={s.headerMain}>
                <h3 className={s.headerUsername}>
                    <span className={s.headerGreetMessage}>Здравствуйте, </span>
                    Человек №3596941
                </h3>
                <span className={s.changeStatusBtn}>Сменить статус</span>
            </div>
            <div className={s.statusWrapper}>
                <span className={s.statusText}>Прежде чем действовать, надо понять</span>
            </div>
            
        </header>
    );
}