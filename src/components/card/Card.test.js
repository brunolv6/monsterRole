
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import React from 'react';
import { Card } from './card.component';

import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

it('testing Card Component', () => {
    expect(toJson(shallow(<Card />))).toMatchSnapshot()
})

