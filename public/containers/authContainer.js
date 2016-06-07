import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

export default function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.checkAuth();
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth();
        }

        checkAuth() {
            if (!this.props.isAuthenticated) {
                // let redirectAfterLogin = this.props.location.pathname;
                // this.props.dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
                browserHistory.push('/');

            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        user: state.user,
        // userName: state.auth.userName,
        // isAuthenticated: state.auth.isAuthenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}