import React from 'react';

import './card.style.css';

export const Card = ({ id, name }) => (
    <div className="card">
        <img alt='monsters' src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
        <h3>{name}</h3>
    </div>
);
