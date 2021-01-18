/* eslint-disable import/no-extraneous-dependencies */
/** Used in jest.config.js */
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
