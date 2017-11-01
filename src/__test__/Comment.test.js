import React from 'react';
import Enzyme , {shallow} from 'enzyme';
import { Comment } from '../components/Comment';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import expect from 'expect';

Enzyme.configure({ adapter: new Adapter() });

describe('<Comment />', () => {
    
  it('should render correctly', () => {
    const component = shallow(<Comment 
      commentVote={() => 1}
      votes={1}
      comments={[]}
      commentDelete={()=> 'delete'}
      body={'Blue Moon'}
      author={'Erick Brook'}
      id={1}
    />);
    expect(shallowToJson(component)).toMatchSnapshot();
  });
  it('it renders 1 <Comment /> component', () => {
    const component = shallow(<Comment 
      commentVote={() => 1}
      body={'Blue Moon'}
      author={'northcoder'}
      votes={1}
      comments={[]}
      commentDelete={()=> 'delete'}/>);
    expect(component).toHaveLength(1);
  });
});