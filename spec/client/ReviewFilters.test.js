import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import ReviewFilters from '../../src/components/ReviewFilters';

describe('ReviewFilters component', () => {
  test('Renders', () => {
    const wrapper = shallow(<ReviewFilters />);

    expect(wrapper.exists()).toBe(true);
  });
});
