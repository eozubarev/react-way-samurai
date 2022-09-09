import React, { Component } from 'react';
import Header from './Header';
import { logout, setAuthUserData } from '../../Redux/reducers/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

class HeaderContainer extends Component {
  render() {
    return (
      <>
        <Header {...this.props}  />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default compose(
                        connect(mapStateToProps, {setAuthUserData, logout})
                      )(HeaderContainer)

// export default connect(mapStateToProps, {setAuthUserData, authMe})(HeaderContainer);
