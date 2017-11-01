import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import { Article } from '../components/Article';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<Article />', () => {
    
  it('should render correctly', () => {
    const component = shallow(<Article 
      fetchComments={() => 'up'}
      comments={[]}
      match={{params:'hello'}}
      fetchArticle={() => {}}
      article={[]}/>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('it renders 1 <Article /> component', () => {
    const component = shallow(<Article 
      fetchComments={() => 'up'}
      comments={[]}
      match={{params:'hello'}}
      fetchArticle={() => []}
      article={[]}/>);
    expect(component).toHaveLength(1);
  });
});