import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import SearchBar from '../../src/components/SearchBar';

describe('SearchBar component', () => {
  test('Renders', () => {
    const wrapper = shallow(<SearchBar />);

    expect(wrapper.exists()).toBe(true);
  });

  test('Button click does not refresh page', () => {
    const wrapper = shallow(<SearchBar />);

    wrapper.find('button').simulate('click', {
      preventDefault: () => {
        prevented = true;
      }
    });
  });
});
