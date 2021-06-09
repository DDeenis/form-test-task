import React, { useState } from 'react';
import s from './Header.module.scss';

export default function Header() {
    const [status, setStatus] = useState('Прежде чем действовать, надо понять');
    const [isEditing, setIsEditing] = useState(false);

    return (
        <header className={s.headerWrapper}>
            <div className={s.headerMain}>
                <h3 className={s.headerUsername}>
                    <span className={s.headerGreetMessage}>Здравствуйте, </span>
                    Человек №3596941
                </h3>
                <span className={s.changeStatusBtn} onClick={() => setIsEditing(true)}>Сменить статус</span>
            </div>
            <div className={s.statusWrapper}>
                {
                    isEditing 
                        ? <input
                            className={s.statusInput}
                            type='text'
                            value={status}
                            autoFocus={true}
                            onChange={(e) => setStatus(e.target.value)}
                            onBlur={() => setIsEditing(false)}
                          />
                        : <span className={s.statusText}>{status}</span>
                }
            </div>
            
        </header>
    );
}