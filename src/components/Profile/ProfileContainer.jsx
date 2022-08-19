import React, { Component } from 'react';
import Profile from './Profile';
import styles from './Profile.module.css';
import { connect } from 'react-redux';
import { getAuthUserProfile, getStatus, updateStatus} from '../../Redux/reducers/profile-reducer';
import { useLocation, useParams } from 'react-router-dom'; 
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, params }}
          />
      );
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends Component {

  componentDidMount () {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getAuthUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <div className={styles.content}>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
      </div>
    );
  }
}
 

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

export default compose(
                        connect(mapStateToProps, {getAuthUserProfile, getStatus, updateStatus}),
                        withRouter,
                        // withAuthRedirect,
                      )(ProfileContainer)