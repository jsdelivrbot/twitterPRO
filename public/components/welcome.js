import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';

class Welcome extends Component {
  render () {
    return (
      <div>
        <h1>Welcome!</h1>
        <div className="text-xs-right">
          <Link to="/groups" className="btn btn-primary">
            Login
          </Link>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(null, mapDispatchToProps)(Welcome);