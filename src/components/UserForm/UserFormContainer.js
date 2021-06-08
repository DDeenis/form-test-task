import React, { useMemo } from 'react';
import UserForm from './UserForm';
import citiesRaw from '../../assets/cities.json';

export default function UserFormContainer() {
    const biggestCity = useMemo(() => citiesRaw.sort((c, n) => n.population - c.population)[0], [citiesRaw]);
    const cities = useMemo(
        () => citiesRaw
            .filter(c => c.population > 50000)
            .sort((c, n) => (n.city > c.city) ? -1 : 1)
            .map(c => <option key={c.city}>{c.city}</option>)
        , [citiesRaw]
    );

    return (
        <UserForm
            defaultCity={biggestCity.city}
            cities={cities}
        />
    );
}