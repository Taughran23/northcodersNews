import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import fetchTopicTitles from '../actions/topics';
import '../css/MobileMenu.css';

export class MobileMenu extends React.Component {
  componentDidMount () {
    this.props.fetchTopicTitles();
  }
  render () {
    return (
      <div>
        <div className='menu menu-text'>
          <NavLink to={'/'} className='menu-text'>Home</NavLink>
        </div>
        {this.props.topicsTitles.map(topic => (
          <div className='menu' key={'topics'}>
            <NavLink 
              className='menu-text'
              to={`/${topic.slug}`} 
              key={topic._id}>
              {topic.title}
            </NavLink>
          </div>
        ))}
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchTopicTitles: () => {
      dispatch(fetchTopicTitles());
    }
  };
}

function mapStateToProps (state) {
  return {
    topicsTitles: state.topics
  };
}

MobileMenu.propTypes = {
  fetchTopicTitles: PropTypes.func.isRequired, 
  topicsTitles: PropTypes.array.isRequired
  
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);