import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import ReviewList from '../../src/components/ReviewList';

describe('ReviewList component', () => {
  test('Renders', () => {
    const wrapper = shallow(<ReviewList reviews={reviews}/>);

    expect(wrapper.exists()).toBe(true);
  });
});
