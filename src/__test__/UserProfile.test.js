import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import { UserProfile } from '../components/UserProfile';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<UserProfile />', () => {
    
  it('should render correctly', () => {
    const component = shallow(<UserProfile 
      articles={[]}
      user={{userName:'northcoder'}}
      match={{params:{userName:'northcoder'}}}
      userProfile={() => 'userProfile'}
      fetchArticles={() => [] }/>);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('it renders 1 <UserProfile /> component', () => {
    const component = shallow(<UserProfile 
      articles={[]}
      user={{userName:'northcoder'}}
      match={{params:{userName:'northcoder'}}}
      userProfile={() => 'userProfile'}
      fetchArticles={() => [] }/>);
    expect(component).toHaveLength(1);
  });
});