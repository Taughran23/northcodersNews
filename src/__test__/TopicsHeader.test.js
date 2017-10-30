import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import { TopicsHeader } from '../components/TopicsHeader';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<TopicsHeader />', () => {
  it('should render correctly', () => {
    const component = shallow(<TopicsHeader
      topicsTitles={[]}
      fetchTopicTitles={()=> []} />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('it renders 1 <TopicsHeader /> component', () => {
    const component = shallow(<TopicsHeader
      topicsTitles={[]}
      fetchTopicTitles={()=> []} />);
    expect(component).toHaveLength(1);
  });
});