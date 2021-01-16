import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import ReviewCard from '../../src/components/ReviewCard';

describe('ReviewCard component', () => {
  test('Renders', () => {
    const wrapper = shallow(<ReviewCard />);

    expect(wrapper.exists()).toBe(true);
  });

  test('Button click does not refresh page', () => {
    const wrapper = shallow(<ReviewCard />);

    wrapper.find('.button-reviewCard').forEach(button => {
      button.simulate('click', {
        preventDefault: () => {
          prevented = true;
        }
      });
    });
  });
});
