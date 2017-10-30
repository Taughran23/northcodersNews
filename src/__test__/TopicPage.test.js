import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import { TopicPage } from '../components/TopicPage';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<TopicPage />', () => {
    
  it('should render correctly', () => {
    const component = shallow(<TopicPage 
      articleVote={() => 'up'}
      fetchTopicArticles={() => {}}
      topicArticles={[]}
      match={{params:{topic_slug:'football'}}}/>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('it renders 1 <TopicPage /> component', () => {
    const component = shallow(<TopicPage
      articleVote={() => 'up'}
      fetchTopicArticles={() => []}
      topicArticles={[]}
      match={{params:{topic_slug:'football'}}}/>);
    expect(component).toHaveLength(1);
  });
});