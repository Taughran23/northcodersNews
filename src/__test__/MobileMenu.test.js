import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import { MobileMenu } from '../components/MobileMenu';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<MobileMenu />', () => {
    
  it('should render correctly', () => {
    const component = shallow(<MobileMenu 
      topicsTitles={[]}
      fetchTopicTitles={() => []}
    />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('it renders 1 <MobileMenu /> component', () => {
    const component = shallow(<MobileMenu 
      topicsTitles={[]}
      fetchTopicTitles={() => []}/>);
    expect(component).toHaveLength(1);
  });
});