import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, area, region, population, flags } = props.country
    return (
        <div className='country bg-primary'>
            <h3>{name.common}</h3>
            <img src={flags.png} alt='' />
            <p><span>Area: {area}</span> <span>Population: {population}</span></p>
            <p>Continent: {region}</p>
        </div>
    );
};

export default Country;