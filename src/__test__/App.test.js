import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import App from '../components/App';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should render correctly', () => {
    const component = shallow(<App />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('it renders 1 <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });
});