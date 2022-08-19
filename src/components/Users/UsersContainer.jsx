import React from 'react';
import Users from './Users';
import { compose } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { follow, unfollow, getUsers } from '../../Redux/reducers/users-reducer';

class UsersContainer extends Component {

    componentDidMount () {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {        
        return <>
            { this.props.isFetching 
                ? <Preloader />
                : null
            }
                <Users 
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                    folowingInProgress={this.props.folowingInProgress}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    pageSize={this.props.pageSize}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    users={this.props.users}
                />;
            </>

    }
}

// Принимает весь state целиком(глобальный) и возвращает объект с данными, которые нам нужны из state 
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize, 
        isFetching: state.usersPage.isFetching,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        folowingInProgress: state.usersPage.folowingInProgress
    }
}

export default compose(
                        withAuthRedirect,
                        connect(mapStateToProps, {follow, unfollow, getUsers})
                      )(UsersContainer)


// let mapDispatchToProps = (dispatch) => {
//         return {
//             follow: (userId) => {
//                 dispatch(followAC(userId))
//             },
//             unfollow: (userId) => {
//                 dispatch(unfollowAC(userId))
//             },
//             setUsers: (users) => {
//                 dispatch(setUsersAC(users))
//             },
//             setCurrentPage: (currentPage) => {
//                 dispatch(setCurrentPageAC(currentPage))
//             },
//             setTotalUsersCount: (totalCount) => {
//                 dispatch(setTotalUsersCountAC(totalCount))
//             },
//             toggleIsFetching: (isFetching) => {
//                 dispatch(toggleIsFetchingAC(isFetching))
//             }
//         }
//     }