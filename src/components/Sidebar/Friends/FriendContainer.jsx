import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Friends from './Friends';

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default compose(
                        connect(mapStateToProps, mapDispatchToProps)
                    )(Friends)

// export default FriendsContainer;
