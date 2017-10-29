import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import { ArticleCard } from '../components/ArticleCard';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<ArticleCard />', () => {
    
  it('should render correctly', () => {
    const component = shallow(<ArticleCard 
      articleVote={() => 1}
      votes={1}
      title={'Blue Moon'}
      user={'Erick Brook'}
      id={1}
    />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('it renders 1 <ArticleCard /> component', () => {
    const component = shallow(<ArticleCard 
      articleVote={() => 1}
      votes={1}
      title={'Blue Moon'}
      user={'northcoder'}
      id={1}/>);
    expect(component).toHaveLength(1);
  });
});