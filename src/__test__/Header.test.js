import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import Header from '../components/Header';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header />', () => {
    
  it('should render correctly', () => {
    const component = shallow(<Header />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('it renders 1 <Header /> component', () => {
    const component = shallow(<Header />);
    expect(component).toHaveLength(1);
  });
});