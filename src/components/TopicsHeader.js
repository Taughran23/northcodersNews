import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


import fetchTopicTitles from '../actions/topics';
import mobileMenu from '../actions/mobileMenu';

import '../css/TopicsHeader.css';



export class TopicsHeader extends React.Component {
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
        <div id='nav'> 
          <nav className="navbar">
            <div className="container" id='navcontainer'>
              <div className="navbar-brand">
                <div className="navbar-item"  id='logo'>
                  Northcoders News
                </div> 
                <a onClick={this.toggleHandler}>
                  <NavLink  to={this.props.active ? '/' : '/menu'} id='hamburger'>
                    <span
                      className={this.props.active ? 'navbar-burger burger is-active ' : 'navbar-burger burger '  } 
                      id='font-color-ham'
                      data-target="navbarMenu">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </NavLink>
                </a>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <NavLink to={'/'} id='font-color'className="navbar-item is-active">
                    HOME
                  </NavLink>
                  {this.props.topicsTitles.map(topic => (
                    <NavLink 
                      id='font-color'
                      className='navbar-item'
                      to={`/${topic.slug}`} 
                      key={topic.slug}>
                      {topic.title.toUpperCase()}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
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


TopicsHeader.propTypes = {
  topicsTitles: PropTypes.array.isRequired, 
  fetchTopicTitles: PropTypes.func.isRequired,
  mobileMenu: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsHeader);