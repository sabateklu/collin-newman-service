import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import SearchBar from '../../src/components/SearchBar';

describe('SearchBar component', () => {
  test('Renders', () => {
    const wrapper = shallow(<SearchBar handleChangeFilterReviews={() => null} handleClickClearInput={() => null}/>);

    expect(wrapper.exists()).toBe(true);
  });

  test('Button click does not refresh page', () => {
    const wrapper = shallow(<SearchBar handleChangeFilterReviews={() => null} handleClickClearInput={() => null}/>);

    wrapper.find('.MuiSvgIcon-root').forEach((button) => {
      button.simulate('click', {
        preventDefault: () => {
          prevented = true;
        }
      });
    });
  });
});
