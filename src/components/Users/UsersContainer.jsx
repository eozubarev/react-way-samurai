import React from 'react';
import Users from './Users';
import * as axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Users.module.scss'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from '../../Redux/reducers/users-reducer';
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends Component {

    componentDidMount () {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => { 
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (currentPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
        .then(response => { 
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)
        })
    }

    render() {        
        return <>
            { this.props.isFetching 
                ? <Preloader />
                : null
            }
                <Users 
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
        totalUsersCount: state.usersPage.totalUsersCount
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
