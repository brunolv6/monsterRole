import React from 'react';
import { Card } from '../card/card.component.jsx'

import './card-list.style.css'

export const CardList = props => (
    <div className='grid'>
        {
            props.monster.map(m => (
                <Card key={m.id} monster={m}/>
            ))
        }
    </div>
)