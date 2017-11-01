import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import CommentForm  from '../components/CommentForm';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<CommentForm />', () => {
    
  it('should render correctly', () => {
    const component = shallow(<CommentForm
    />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('it renders 1 <CommentForm /> component', () => {
    const component = shallow(<CommentForm />);
    expect(component).toHaveLength(1);
  });
});