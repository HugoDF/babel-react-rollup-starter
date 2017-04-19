import React from 'react';
import { DummyComponent } from './dummy-component';
import { shallow } from 'enzyme';
import sinon from 'sinon';

test('DummyComponent should render', () => {
    const comp = shallow(<DummyComponent />);
    expect(comp.find('.DummyComponent').length, 1);
});