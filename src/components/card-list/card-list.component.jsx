import React from 'react';
import { Card } from '../card/card.component.jsx'

import './card-list.style.css'

export const CardList = ({ monster }) => (
    <div className='grid'>
        {
            monster.map(m => (
                <Card key={m.id} id={m.id} name={m.name}/>
            ))
        }
    </div>
)