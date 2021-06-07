import React, { useMemo, useState } from 'react';
import InputField from '../InputField/InputField';
import s from './Header.module.scss';
import citiesRaw from '../../assets/cities.json';

export default function Header() {
    const biggestCity = useMemo(() => citiesRaw.sort((c, n) => n.population - c.population)[0], [citiesRaw]);
    const cities = useMemo(
        () => citiesRaw
            .filter(c => c.population > 50000)
            .sort((c, n) => (n.city > c.city) ? -1 : 1)
            .map(c => <option key={c.city}>{c.city}</option>)
        , [citiesRaw]
    );

    const [city, setCity] = useState(biggestCity.city);
    const select = <select className={s.citySelect} value={city} onChange={(e) => setCity(e.target.value)}>{cities}</select>;

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
            <InputField title='Город' component={select} />
        </header>
    );
}