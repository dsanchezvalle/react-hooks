import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp'

describe('HookApp tests', () => {
    test('it should render HookAppm properly', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
