import React from 'react';
import Users from './Users';
import * as axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../Redux/reducers/users-reducer';


class UsersContainer extends Component {

    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => { 
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
        .then(response => { 
            this.props.setUsers(response.data.items)
        })
    }

    render() {        
        return <Users 
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    pageSize={this.props.pageSize}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    users={this.props.users}
                />;
    }
}

// Принимает весь state целиком(глобальный) и возвращает объект с данными, которые нам нужны из state 
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
