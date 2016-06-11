import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TargetList from '../containers/targets';
import loginActions from '../actions/login';
import {logout} from '../actions/logout';
import jwtDecode from 'jwt-decode';

import { PropTypes } from 'react';

class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
       
  }

  
  logoutClick(){
    console.log(this.props);
    console.log("logout Click");
    window.localStorage.removeItem('id_token');
    this.props.logout();
    this.context.router.push('/');
  }


  render () {
    return (
       <div className="navbar navbar-default">
        <h1>TwiDerpRo
          <button className="btn btn-danger pull-xs-right" onClick={ this.logoutClick.bind(this) }>Log out</button>
          <Link to='/' className="btn btn-primary pull-xs-right">Home</Link>
        </h1>
        {this.props.children}
       </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.isAuthenticated,

  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)