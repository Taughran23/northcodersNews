import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import fetchTopicTitles from '../actions/topics';
import mobileMenu from '../actions/mobileMenu';
import '../css/MobileMenu.css';

export class MobileMenu extends React.Component {
  constructor (props) {
    super(props);
    this.toggleHandler = this.toggleHandler.bind(this);
  }
  componentDidMount () {
    this.props.fetchTopicTitles();
  }
  toggleHandler () {
    this.props.mobileMenu(this.props.active);
  }
  
  render () {
    return (
      <div>
        <div className='menu menu-text'>
          <NavLink to={'/'} className='menu-text' >
            <span onClick={this.toggleHandler}>
              HOME
            </span>
          </NavLink>
        </div>
        {this.props.topicsTitles.map(topic => (
          <div className={topic.slug} key={'topics'}>
            <NavLink 
              className={topic.slug}
              to={`/${topic.slug}`} 
              key={topic.slug}>
              <span onClick={this.toggleHandler}>
                {topic.title.toUpperCase()}
              </span>
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
    },
    mobileMenu: (bool) => {
      dispatch(mobileMenu(bool));
    }
  };
}

function mapStateToProps (state) {
  return {
    topicsTitles: state.topics, 
    active: state.active
  };
}

MobileMenu.propTypes = {
  fetchTopicTitles: PropTypes.func.isRequired, 
  topicsTitles: PropTypes.array.isRequired
  
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);