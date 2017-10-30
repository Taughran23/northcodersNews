import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


import fetchTopicTitles from '../actions/topics';
import '../css/TopicsHeader.css';


export class TopicsHeader extends React.Component {
  componentDidMount () {
    this.props.fetchTopicTitles();
  }

  render () {
    return (
      <div>
  
        <div className='nav-container'>
          <div className='columns is-mobile nav-bar'>

            <div className='column is-half is-one-quarter-mobile'>
              <img id='logo' src={require('../images/ncNewsLogo.png')}/>
              <div className='logo-mobile is-hidden-tablet'>Northcoders News</div>
            </div>

            <NavLink className='column nav-button 'to={'/'}>HOME</NavLink>
            {this.props.topicsTitles.map(topic => (
              <NavLink 
                className='column nav-button'
                to={`/${topic.slug}`} 
                key={topic._id}>
                {topic.title.toUpperCase()}
              </NavLink>
            ))}
         
            <NavLink className='column is-half-mobile is-hidden-tablet fa fa-bars menu-position'
              to={'/menu'}/>
          </div>
        </div>
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
    topicsTitles: state.topics.data
  };
}


TopicsHeader.propTypes = {
  topicsTitles: PropTypes.array.isRequired, 
  fetchTopicTitles: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsHeader);