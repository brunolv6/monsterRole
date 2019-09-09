import React from 'react'

import { shallow } from 'enzyme'

import { CardList } from './card-list.component'

import toJson from 'enzyme-to-json';

it('testing the render of cart-list', () => {
    const mockRobot = [
        {
            id: 1,
            name: "Jose",
            username: "jojo",
            email: "jojo@gmail.com"
        }
    ]

    expect(toJson(shallow(<CardList monster={mockRobot}/>))).toMatchSnapshot()
})