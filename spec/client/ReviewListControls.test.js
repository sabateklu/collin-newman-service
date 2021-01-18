import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import ReviewListControls from '../../src/components/ReviewListControls';

describe('ReviewListControls component', () => {
  test('Renders', () => {
    const wrapper = shallow(<ReviewListControls />);

    expect(wrapper.exists()).toBe(true);
  });
});
