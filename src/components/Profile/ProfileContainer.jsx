import React, { Component } from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import styles from './Profile.module.css';
import { connect } from 'react-redux';
import { setUserProfile } from '../../Redux/reducers/profile-reducer';
import { useLocation, useParams } from 'react-router-dom'; 

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
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => { 
          this.props.setUserProfile(response.data)
        })
  }

  render() {
    return (
      <div className={styles.content}>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default connect(mapStateToProps, {setUserProfile}) (withRouter(ProfileContainer));