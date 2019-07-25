import React from 'react';

import './card-list.style.css'

export const CardList = props => (
    <div className='grid'>
        {
            props.monster.map(m => (
                <h2 key={m.id}>{m.name}</h2>
            ))
        }
    </div>
)