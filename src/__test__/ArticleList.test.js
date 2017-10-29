import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import { ArticleList } from '../components/ArticleList';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<ArticleList />', () => {
    
  it('should render correctly', () => {
    const component = shallow(<ArticleList 
      articleVote={() => 'up'}
      fetchArticles={() => {}}
      articles={[]}/>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('it renders 1 <ArticleList /> component', () => {
    const component = shallow(<ArticleList 
      articleVote={() => 'up'}
      fetchArticles={() => []}
      articles={[]}/>);
    expect(component).toHaveLength(1);
  });
});